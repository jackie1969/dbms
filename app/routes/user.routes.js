module.exports = function(app){
   var user = require('../controllers/user.controller');
   var passport = require('passport'); // Module require for authentication
   app.get('/std-dashboard',user.stdDash);
   app.get('/staff-dashboard',user.staffDash);
   app.get('/admin-dashboard',user.adminDash);

   app.post('/login',passport.authenticate('local',function(){
     //Authentication before allowing to login
   }));

 }
