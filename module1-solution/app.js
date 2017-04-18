(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope) {

  $scope.checkString = function() {
    if ($scope.dish_string == "" || $scope.dish_string == undefined) {
      $scope.message = "Please enter data first";
    } else {
      var len = $scope.dish_string.split(",").length;
      if (len <= 3) {
        $scope.message = "Enjoy!";
      } else if (len > 3) {
        $scope.message = "Too much!";
      }
    }
  };
}

})();
