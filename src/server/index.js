/*
 * src/server/index.js
 */

import express from 'express';
import routes from './routes';

const app = express();

app.get('/happysad', routes.happysad.fn);

app.listen(8083, (err) => {
  if (err)
    return console.log(err);
  console.log('running express on localhost:8083');
});
