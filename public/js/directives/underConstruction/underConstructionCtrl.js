(function () {

  angular
    .module('artistApp')
    .controller('underConstructionCtrl', underConstructionCtrl);

  underConstructionCtrl.$inject = ['$location','authentication'];
  function underConstructionCtrl($location, authentication) {
    var vm = this;

    vm.isLoggedIn = authentication.isLoggedIn();

    vm.currentUser = authentication.currentUser();

    vm.logout = function() {
      authentication.logout();
    }
  }

})();
