var app = angular.module('app');

app.controller('newController', ['$scope', function($scope){
    console.log("newController loaded");

    var self = this;

    self.newFriend = {};

    self.create = function(){
        console.log("Create New Friend clicked");

        if (!self.newFriend.name || self.newFriend.favoriteLanguage){
            console.log("required fields not present");

            return;
        }

        console.log("required fields present and look like this: ");
        console.log(self.newFriend);
        console.log("has not been sent to server yet");
    };
}]);
