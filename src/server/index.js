/*
 * src/server/index.js
 */

require('babel/polyfill');
import express from 'express';
import routes from './routes';


const app = express();

app.get('/happysad', routes.happysad.fn);

app.listen(8083, function (err) {
  if (err)
    return console.log(err);
  console.log('running express on localhost:8083');
});
