/*
 * routes.js
 *
 * contains routes for the express node server
 *
 * */

import gladSadOrUnknown from './HappySadUnknown'

var routes = {
  happysad: {
    method: 'get',
    fn: function(req, res) {
      console.log(gladSadOrUnknown(req.query.text));
      res.json({
        output: gladSadOrUnknown(req.query.text)
      });
    }
  }
};

module.exports = routes;
