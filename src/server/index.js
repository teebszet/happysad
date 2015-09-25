import express from 'express';
import routes from './routes';

const app = express();

app.get('/api', routes.api);

app.listen(8083, function(err) {
  if (err)
    return console.log(err);
  console.log('running on localhost:8083');
});
