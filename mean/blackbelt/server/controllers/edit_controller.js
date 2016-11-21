var app = angular.module('app');

app.controller('editController', ['$scope', '$routesParams', function($scope, $routesParams{
    console.log("editController loaded");
    console.log("$routesParams is currently: ", $routesParams);
})]);
