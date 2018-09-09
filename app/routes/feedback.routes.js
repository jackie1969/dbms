module.exports = function(app){
   var feedback = require('../controllers/feedback.controller');

   app.get('/staff-comments',feedback.comments);
   app.get('/staff-profile',feedback.staff_profile);
   app.get('/std-feedback',feedback.std_feedback);
   app.get('/feedback-ques',feedback.feedback_ques);
   app.get('/staff-list',feedback.staff_list);
   app.get('/feedback-score',feedback.feedback_score);

 }
