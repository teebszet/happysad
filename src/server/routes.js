/*
 * routes.js
 *
 * contains routes for the express node server
 *
 * */
var routes = {
  '/api': {
    method: 'get',
    fn: function(req, res) {
      res.json({
        shouts: [
          'Hello World!',
          'Using my routes.js',
          'This is React and Webpack...',
          'They make development fun',
          'Another shout'
        ] 
      });
    }
  }

};

module.exports = routes;
