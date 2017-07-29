(function () {

  angular
    .module('artistApp')
    .directive('underConstruction', underConstruction);

  function underConstruction () {
    return {
      restrict: 'EA',
      templateUrl: './js/directives/navigation/underConstruction.template.html',
      controller: 'underConstructionCtrl'
    };
  }

})();
