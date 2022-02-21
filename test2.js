
const kites = require('@kites/core');
var { engine } = require('@kites/core');
var  express  = require('@kites/express');
/*
kites.engine().init().then((app) => {
  app.logger.info('Hello World!');

});
*/
async function bootstrap() {
  const app = await engine({
      discover: false,
    })
    .use(require('express'))
    .on('express:config', app => {
      app.get('/hi', (req, res) => res.send('hello!'));
    })/*express()*/
    .init();

  app.logger.info(`Let's browse http://localhost:3000/hi`);
}

// let kites fly!
bootstrap();

/*
const kites = require('@kites/core');
var express = require('@kites/express');


kites.engine().init().then((app) => {
  app.logger.info('Hello World!');
//  app.get('/hi', (req, res) => {
//  res.send('Hello World!')
//})
});


async function bootstrap() {

  const app = await engine({
      discover: false,
    })
    .use(kites.express())
    .on('express:config', app => {
      app.get('/hi', (req, res) => res.send('hello!'));
    })
    .init();

  app.logger.info(`Let's browse http://localhost:3000/hi`);

}

// let kites fly!
bootstrap();
*/
