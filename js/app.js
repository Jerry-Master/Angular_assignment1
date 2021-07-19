(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.csv = "";

  $scope.check = function () {
    var num_entries = $scope.csv.split(',').filter(function (x) { return x.replace(/ /g,'') != ""; }).length;
    if (num_entries == 0){
      $scope.message = "Please enter data first";
      $scope.myStyle = {color: 'red', border: '1px solid red'};
    } else if (num_entries <= 3){
      $scope.message = "Enjoy!";
      $scope.myStyle = {color: 'green', border: '1px solid green'};
    } else {
      $scope.message = "Too much!";
    }
    
    return "Yaakov likes to eat healthy snacks at night!";
  };
};

})();
