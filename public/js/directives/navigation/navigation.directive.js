(function () {

  angular
    .module('artistApp')
    .directive('navigation', navigation);

  function navigation () {
    return {
      restrict: 'EA',
      templateUrl: './js/directives/navigation/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };
  }

})();
