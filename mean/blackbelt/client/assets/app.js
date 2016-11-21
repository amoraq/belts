var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/reg',{
        templateUrl: './../partials/register.html',
        controller: 'registrationController',
        controllerAs: 'RC'
    })
    .when('/login',{
        templateUrl: './../partials/login.html',
        controller: 'loginController',
        controllerAs: 'LC'
    })
    .otherwise('/login');
});
