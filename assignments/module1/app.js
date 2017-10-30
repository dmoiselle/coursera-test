(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
    $scope.numberOfItems = 0;
    $scope.stateOfBeing = "";
    $scope.lunchDishes = "";

    $scope.checkIfTooMuch = function(){
        $scope.numberOfItems = $scope.countItems();
        if($scope.numberOfItems > 3){
            $scope.stateOfBeing = "Too much!";
        }
        else if($scope.numberOfItems < 1){
            $scope.stateOfBeing = "Please enter data first";
        }
        else {
            $scope.stateOfBeing = "Enjoy!";
        }
    }

    $scope.countItems = function(){
        var comma = ',';
        var arrayOfStrings = $scope.lunchDishes.split(comma);
        console.log("the length of the array is " + arrayOfStrings.length)
        var numberOfFoodItems = 0;
        for(var i=0;i<arrayOfStrings.length;i++){
            if (arrayOfStrings[i].length >0){
                numberOfFoodItems++;
            }
        }
        $scope.numberOfItems =  numberOfFoodItems;
        console.log("number of items is " + $scope.numberOfItems);
        return $scope.numberOfItems;
    }
}
})();
