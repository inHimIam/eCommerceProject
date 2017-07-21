(function () {

  angular
    .module('artistApp')
    .directive('myfooter', myfooter);

  function myfooter () {
    return {
      restrict: 'EA',
      templateUrl: './js/directives/footer/myfooter.template.html',
      controller: 'myfooterCtrl as navvm'
    };
  }

})();
