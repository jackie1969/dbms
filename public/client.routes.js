angular.module('appRoutes',['ui.router'])
        .config(function($stateProvider,$locationProvider,$urlRouterProvider){
        $stateProvider
        .state('home',{
          url: "/home",
          templateUrl: "/views/pages/home.pug"
        })
        .state('student',{
            url: "/student",
            templateUrl: "/views/pages/std-login.pug",
            controller: "std-log-ctrl"
        })
        .state('std-reg',{
          url: "/std-reg",
          templateUrl: "/views/pages/std-reg.pug"
        })
        .state('staff',{
          url:"/staff",
          templateUrl: "/views/pages/staff-login.pug",
          controller: "staff-log-ctrl"
        })
        .state('staff-reg',{
          url: "/staff-reg",
          templateUrl: "/views/pages/staff-reg.pug"
        })
        .state('admin',{
          url: "/admin-login",
          templateUrl: "/views/pages/admin-login.pug",
          controller: "admin-log-ctrl"
        })


      $urlRouterProvider.otherwise('/home');


})
