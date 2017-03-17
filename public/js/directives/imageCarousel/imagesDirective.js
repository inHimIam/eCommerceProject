(function () {

  angular
    .module('artistApp')
    .directive('imageCarousel', imageCarousel);

  function imageCarousel () {
    return {
      restrict: 'EA',
      templateUrl: './js/directives/imageCarousel/imagesTemplate.html',
      controller: 'imagesCtrl'
    };
  }

})();
