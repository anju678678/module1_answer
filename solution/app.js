(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController ($scope, $filter) {

    $scope.list = "";
    $scope.message = "";
    $scope.getItem = function (list) {
      var array = list.split(',');
      var alrttype;
      $scope.message = getMessage(array);
    }
  }
  function getMessage(string) {
      if (string == "" ) {
        return "Please enter data first";
      }
      else if (string.length < 4) {
        return "Enjoy";
      }
      else  {
        return "Too much";
      }
  };

})();
