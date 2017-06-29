(function () {

  angular
    .module('artistApp')
    .directive('cardDescription', cardDescription);

  function cardDescription () {
    return {
      restrict: 'EA',
      templateUrl: './js/directives/cardDescription/cardDescription.html',
      controller: 'cardDescriptionCtrl',
      scope: {
        title: '=',
        description: '='
      }
    };
  }

})();
