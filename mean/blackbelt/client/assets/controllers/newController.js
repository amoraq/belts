app.controller('newController', ['$scope', 'friendsFactory', function($scope, friendsFactory){
    var index = function(){
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };

    index();

    //$scope.create goes here
}]);
