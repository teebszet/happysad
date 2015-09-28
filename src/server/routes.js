/*
 * src/server/routes.js
 *
 * contains route functions for the express node server
 *
 */

import gladSadOrUnknown from './HappySadUnknown'

var routes = {
  happysad: {
    method: 'get',
    fn: (req, res) => {
      if (req.query && typeof(req.query.text) !== undefined) {
        res.json({
          output: gladSadOrUnknown(req.query.text)
        });
      }
    }
  }
};

module.exports = routes;
