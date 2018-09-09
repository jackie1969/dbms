exports.comments = function(req,res){
  res.render('staff-comment',{});
}
exports.staff_profile = function(req,res){
  res.render('staff-dashboard',{});
}
exports.std_feedback = function(req,res){
  res.render('std-feedback',{});
}
exports.feedback_ques = function(req,res){
  res.render('feedback-ques',{});
}
exports.staff_list = function(req,res){
  res.render('staff-list',{});
}
exports.feedback_score = function(req,res){
  res.render('feedback-score',{});
}
