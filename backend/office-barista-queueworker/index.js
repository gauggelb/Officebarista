const kue = require('kue');
const express = require('express');
const app = express();
const EventSource = require('eventsource');
const request = require('request');

const queue = kue.createQueue({
  redis: process.env.REDIS_URI
});

let hcToken = process.env.HC_TOKEN_INITIAL;
let refreshToken = process.env.HC_REFRESH_TOKEN_INITIAL;

let hcAppliance = process.env.HC_APPLIANCE;

// One Coffee takes 1 minute to brew
const COFFEE_JOB_DURATION = 60000;

// Process Queue
queue.process('make-coffee', function(job, done){
  // Check if HC Token needs to be refreshed
  request({
    method: 'GET',
    url: 'https://api.home-connect.com/api/homeappliances/'+hcAppliance+'/settings',
    header: {
      Authorization: 'Bearer '+hcToken,
      Accept: 'application/vnd.bsh.sdk.v1+json'
    }
  }, function(e, r, body) {
    let b = JSON.parse(body);
    if (b['error']['key'] === 'invalid_token' || b['error']['key'] === '401') {
      console.log('REFRESHING <---');
      request({
        method: 'POST',
        url: 'https://api.home-connect.com/security/oauth/token',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/vnd.bsh.sdk.v1+json'
        },
        form: {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      }, function(e, r, body) {
        b = JSON.parse(body);
        hcToken = b.access_token;
        refreshToken = b.refresh_token;

        console.log('hcToken ', hcToken);
        console.log('refreshToken ', refreshToken);
        processCoffeeRequest(job, done);
      });
    } else {
      console.log('hcToken ', hcToken);
      console.log('refreshToken ', refreshToken);
      processCoffeeRequest(job, done);
    }
  });
});

function processCoffeeRequest(job, done) {

  // Check if machine is on
  request({
    url: 'https://api.home-connect.com//api/homeappliances/'+hcAppliance+'/settings',
    method: 'GET',
    headers: {
      Authorization: 'Bearer '+hcToken,
      Accept: 'application/vnd.bsh.sdk.v1+json'
    }
  }, function(error, response, body){
    var t = JSON.parse(body);
    // @TODO !==
    if (t.data.settings[0].value !== 'BSH.Common.EnumType.PowerState.On') {

      // Turn machine on
      request({
        url: 'https://api.home-connect.com//api/homeappliances/'+hcAppliance+'/settings/BSH.Common.Setting.PowerState',
        method: 'PUT',
        headers: {
          Authorization: 'Bearer '+hcToken,
          'Content-Type': 'application/vnd.bsh.hca.v2+json',
          Accept: 'application/vnd.bsh.sdk.v1+json'
        },
        body: '{"data": {"key": "BSH.Common.Setting.PowerState", "value": "BSH.Common.EnumType.PowerState.On"}}'
      }, function(error, response, body) {

        setTimeout(function() {

          // Check if coffeemug is in place
          request.get({url: 'https://iot-hackathon.herokuapp.com/sensordata?$sort[date]=-1&$limit=1', json: true}, function(e, r, body) {
            let lastMeasure = body.data[0];
            let lastMeasurement = lastMeasure.measurement;
            console.log(lastMeasurement);

            if (lastMeasurement > 130 && lastMeasurement < 150) {
              startProduction(job, done);
            } else {
              return done(new Error('no coffeemug in place'));
            }
          });
        }, 60000);
      });
    } else {

      // Check if coffeemug is in place
      request.get({url: 'https://iot-hackathon.herokuapp.com/sensordata?$sort[date]=-1&$limit=1', json: true}, function(e, r, body) {
        console.log(body);
        let lastMeasure = body.data[0];
        let lastMeasurement = lastMeasure.measurement;
        console.log(lastMeasurement);

        if (lastMeasurement > 130 && lastMeasurement < 150) {
          startProduction(job, done);
        } else {
          return done(new Error('no coffeemug in place'));
        }
      });
    }
  });
}

function startProduction(job, done) {
  switch (job.data.type) {
    case 'Cappucino':
      produce(job, done, 'ConsumerProducts.CoffeeMaker.Program.Beverage.Cappuccino');
      break;
    case 'Espresso':
      produce(job, done, 'ConsumerProducts.CoffeeMaker.Program.Beverage.Espresso');
      break;
    case 'Latte Macchiato':
      produce(job, done, 'ConsumerProducts.CoffeeMaker.Program.Beverage.LatteMacchiato');
      break;
    case 'Milchkaffee':
      produce(job, done, 'ConsumerProducts.CoffeeMaker.Program.Beverage.CaffeLatte');
      break;
    case 'Kaffee':
      produce(job, done, 'ConsumerProducts.CoffeeMaker.Program.Beverage.Coffee');
      break;
    default:
      return done(new Error('coffeetype not supported'));
  }

  // setTimeout(function () {
  //   done();
  // }, COFFEE_JOB_DURATION);
}

function produce(job, done, program, beanAmount, fillQuantity) {
  job.log('Production of '+program+' started!')
  request({
    url: 'https://api.home-connect.com//api/homeappliances/'+hcAppliance+'/programs/active',
    method: 'PUT',
    headers: {
      Authorization: 'Bearer '+hcToken,
      'Content-Type': 'application/vnd.bsh.hca.v2+json',
      Accept: 'application/vnd.bsh.sdk.v1+json'
    },
    body: '{"data": {"key": "'+program+'"}}'
  }, function(error, response, body) {
    console.log(error);

    // Get Program Milk Ratio %
    setTimeout(function() {
      request({
        url: 'https://api.home-connect.com//api/homeappliances/'+hcAppliance+'/programs/active',
        method: 'GET',
        headers: {
          Authorization: 'Bearer '+hcToken,
          Accept: 'application/vnd.bsh.sdk.v1+json'
        }
      }, function(error, response, body) {
        console.log(body);
        let b = JSON.parse(body);
        console.log(b);
        let x = false;

        for (var i = 0; i < b.data.options.length; i++) {
          if (b.data.options[i].key === 'ConsumerProducts.CoffeeMaker.Option.CoffeeMilkRatio') {
            console.log(b.data.options[i].value.slice(54, 56));
            var milkR = b.data.options[i].value.slice(54, 56);
            x = true;

            setTimeout(function () {
              done(null, milkR);
            }, COFFEE_JOB_DURATION);
          }
        }

        // Coffee without Milk Ratio
        if (!x) {
          setTimeout(function () {
            done(null, 0);
          }, COFFEE_JOB_DURATION);
        }
      });
    }, 15000);
  });
}

// Kue UI;
kue.app.listen(process.env.PORT || 3000);
