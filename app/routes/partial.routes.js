module.exports = function(app){
  var partial = require('../controllers/partial.controllers');
  app.get('/views/pages/:partial',partial.render);
}
