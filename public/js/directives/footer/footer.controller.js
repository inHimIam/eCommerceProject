(function () {

  angular
    .module('artistApp')
    .controller('myfooterCtrl', myfooterCtrl);

  myfooterCtrl.$inject = ['$location','authentication'];
  function myfooterCtrl($location, authentication) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function() {
      authentication.logout();
    }
  }

})();