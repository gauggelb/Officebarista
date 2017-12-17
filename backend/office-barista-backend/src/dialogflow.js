const { DialogflowApp } = require('actions-on-google');
//const app = require('./app');
const kue = require('kue');
const nodemailer = require('nodemailer');

const queue = kue.createQueue({
  redis: process.env.REDIS_URI
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

module.exports = function(req, res) {
  const dialogflow = new DialogflowApp({request: req, response: res});
  const app = req.app;

  const ORDER_COFFEE_ACTION = 'order_coffee';
  const ORDER_COFFEE_GET_NAME_ACTION = 'order_coffee.get_name';
  const ORDER_COFFEE_GET_NAME_GET_AUTHCODE_ACTION = 'order_coffee.get_name.get_auth_code';

  const COFFEE_TYPE_ARGUMENT = 'coffee-type';

  function orderCoffeeAction(dialogflow) {
    const coffeeType = dialogflow.getArgument(COFFEE_TYPE_ARGUMENT);

    // #1 Get User Info
    let user = dialogflow.getUser();
    console.log(user.userId);

    app.service('users').find({query: {voiceId: user.userId}}).then(items => {
      console.log(items);
      if (items.data.length > 0) {
        let buyer = items.data[0];

        // #2 Check if coffeemug is in place
        app.service('sensordata').find({query: {$sort: {date: -1}}}).then(items => {
          let lastMeasure = items.data.slice(-1).pop();
          let lastMeasurement = lastMeasure.measurement;
          console.log(lastMeasurement);

          if (lastMeasurement > 130 && lastMeasurement < 150) {
            app.service('orders').create({
              "description": coffeeType,
              "beanAmount": "ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Normal",
              "fillAmount": "x",
              "price": 2.5,
              "date": Date.now(),
              "buyer": buyer._id
            });

            queue.inactiveCount(function(err, total) {
              dialogflow.tell(`Dein ${coffeeType} wird zubereitet. Es dauert circa ${total+1 === 1 ? 'eine' : total+1} ${total+1 === 1 ? 'Minute' : 'Minuten'}`);
            });
          } else {
            dialogflow.tell(`Ich kann deine Bestellung leider nicht entgegen nehmen. Es steht keine Tasse unter der Maschine. Versuche es später nocheinmal!`);
          }
        });
      } else {
        dialogflow.setContext('barista', 5, {
          coffeeType
        });
        // User nach name Fragen -> User in DB suchen -> E-Mail Code senden -> Code in Context -> Code validieren -> Bestellung aufnehmen
        dialogflow.ask('Leider kenne ich dich noch nicht. Teile mir bitte deinen Vor und Nachnamen mit.');
      }
    });
  }

  function orderCoffeeGetNameAction(dialogflow) {
    const firstName = dialogflow.getArgument('given-name');
    const lastName = dialogflow.getArgument('last-name');

    app.service('users').find({query: {name: firstName+' '+lastName}}).then(items => {
      if (items.data.length > 0) {
        const user = items.data[0];

        // Random 4-digit number
        const authCode = Math.floor(1000 + Math.random() * 9000);

        // Send code to user via email
        const mailOptions = {
          from: 'HermanHZentrum@gmail.com',
          to: user.email,
          subject: 'Office Barista Auth Code',
          text: authCode.toString()
        };
        transporter.sendMail(mailOptions, function(error, data){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + data.response);

            // Save auth code to dialogflow session
            // dialogflow.data.authCode = authCode;
            // dialogflow.data.user = user;
            dialogflow.setContext('barista', 5, {
              authCode,
              user
            });

            const userSplit = user.name.split(' ');
            dialogflow.ask(`Danke ${userSplit[0]}! Ich habe dir eine E-Mail mit einem Autorisierungscode gesendet bitte lies mir die Zahlen vor.`)
          }
        });

      } else {
        dialogflow.tell(`Ich finde dich leider noch nicht im System, bitte wende dich an einen Administrator oder registriere dich in der Office Barista App!`);
      }
    });
  }

  function orderCoffeeGetNameGetAuthcodeAction(dialogflow) {
    const userAuthCode = dialogflow.getArgument('auth_code');
    //const generatedAuthCode = dialogflow.data.authCode;
    const barista = dialogflow.getContext('barista');
    const generatedAuthCode = barista.parameters.authCode;
    console.log(userAuthCode, generatedAuthCode);

    if (userAuthCode == generatedAuthCode) {
      //const user = dialogflow.data.user;
      const user = barista.parameters.user;
      const coffeeType = barista.parameters.coffeeType;

      // Check if coffeemug is in place
      app.service('sensordata').find({query: {$sort: {date: -1}}}).then(items => {
        let lastMeasure = items.data.slice(-1).pop();
        let lastMeasurement = lastMeasure.measurement;
        console.log(lastMeasurement);

        if (lastMeasurement > 130 && lastMeasurement < 150) {
          app.service('orders').create({
            "description": coffeeType,
            "beanAmount": "ConsumerProducts.CoffeeMaker.EnumType.BeanAmount.Normal",
            "fillAmount": "x",
            "price": 2.5,
            "date": Date.now(),
            "buyer": user._id
          });

          queue.inactiveCount(function(err, total) {
            dialogflow.tell(`Dein ${coffeeType} wird zubereitet. Es dauert circa ${total+1 === 1 ? 'eine' : total+1} ${total+1 === 1 ? 'Minute' : 'Minuten'}`);
          });
        } else {
          dialogflow.tell(`Ich kann deine Bestellung leider nicht entgegen nehmen. Es steht keine Tasse unter der Maschine. Versuche es später nocheinmal!`);
        }
      });
    } else {
      dialogflow.tell(`Der Autorisierungscode ist leider nicht korrekt! Bitte probiere es später erneut.`);
    }
  }

  const actionMap = new Map();
  actionMap.set(ORDER_COFFEE_ACTION, orderCoffeeAction);
  actionMap.set(ORDER_COFFEE_GET_NAME_ACTION, orderCoffeeGetNameAction);
  actionMap.set(ORDER_COFFEE_GET_NAME_GET_AUTHCODE_ACTION, orderCoffeeGetNameGetAuthcodeAction);
  dialogflow.handleRequest(actionMap);
}
