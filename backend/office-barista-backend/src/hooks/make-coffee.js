const request = require('request');
const kue = require('kue');

const materialConsumption = require('../material-consumption');

const queue = kue.createQueue({
  redis: process.env.REDIS_URI
});

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {

    // #1 Create new Kue job
    const job = queue.create('make-coffee', {
      title: `${hook.data.description} for ${hook.data.user.name}`,
      type: hook.data.description,
      beanAmount: hook.data.beanAmount,
      fillAmount: hook.data.fillAmount
    }).save(function(err) {
       if(!err) console.log(job.id);
    });

    job.on('complete', function(result) {
      console.log('Job completed', job.id);
      console.log(result)

      // @TODO MILCH
      hook.app.service('materials').find().then(items => {
        let { data } = items;
        let beans, milk;

        for (var i = 0; i < data.length; i++) {
          if (data[i].description === 'Beans') {
            beans = data[i];
          } else if (data[i].description === 'Milk') {
            milk = data[i];
          }
        }

        // Lagerbestand subtrahieren
        hook.app.service('materials').patch(beans._id, {inStock: beans.inStock - materialConsumption.beans[job.data.beanAmount]});
        hook.app.service('materials').patch(milk._id, {inStock: milk.inStock - (job.data.fillAmount*(result/100))});

        // Lagerbestand prüfen (kritisch)
        let newStock = beans.inStock - materialConsumption.beans[job.data.beanAmount];
        if (newStock <= beans.criticalStock) {
          request({
            method: 'POST',
            url: 'http://a.wunderlist.com/api/v1/tasks',
            headers: {
              'Content-Type': 'application/json',
              'X-Client-ID': process.env.WUNDER_CLIENT,
              'X-Access-Token': process.env.WUNDER_TOKEN
            },
            json: { list_id: 330356023, title: '1Kg Kaffeebohnen' }
          }, function (error, response, body) {
            console.log(body);
          });
        }

        let newStockM = milk.inStock - job.data.fillAmount*(result/100);
        if (newStockM <= milk.criticalStock) {
          request({
            method: 'POST',
            url: 'http://a.wunderlist.com/api/v1/tasks',
            headers: {
              'Content-Type': 'application/json',
              'X-Client-ID': process.env.WUNDER_CLIENT,
              'X-Access-Token': process.env.WUNDER_TOKEN
            },
            json: { list_id: 330356023, title: '1L Milch' }
          }, function (error, response, body) {
            console.log(body);
          });
        }
      });

      return Promise.resolve(hook);
    }).on('failed', function(errorMessage) {
      console.log('Failed to make Coffee, '+errorMessage);
    }).on('start', function() {
      console.log('Job started', job.id);
    }).on('enqueue', function() {
      console.log('Job enqueued', job.id);
    });
  };
};
