var app = angular.module('login',[]);

app.controller('std-log-ctrl',function($scope,$http){
    $scope.std_login = function(){
      window.location.href = "/std-dashboard";
    }
});

app.controller('staff-log-ctrl',function($scope,$http){
  $scope.staff_login = function(){
    window.location.href = "/staff-dashboard";
  }
});

app.controller('admin-log-ctrl',function($scope,$http){
  $scope.admin_login = function(){
    window.location.href = "/admin-dashboard";
  }
})
