(function () {

  angular
    .module('artistApp')
    .controller('cardDescriptionCtrl', cardDescriptionCtrl);

  cardDescriptionCtrl.$inject = ['$scope'];
  function cardDescriptionCtrl ($scope) {

    $scope.showDesc = false;

    $scope.description = function() {
        $scope.showDesc = !$scope.showDesc;
    };
  }

})();
