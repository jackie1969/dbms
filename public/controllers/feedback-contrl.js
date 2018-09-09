var app = angular.module('feedback',[]);

app.controller('staff-dash-ctrl',function($scope,$http){
  $scope.feedback_ques = function(){
    window.location.href = "/feedback-ques";
  }
})
