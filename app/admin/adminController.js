(function() {

  angular
    .module('artistApp')
    .controller('adminCtrl', pricingCtrl);

    function pricingCtrl () {
      var vm = this;
      
      console.log('admin controller is running');
    }

})();
