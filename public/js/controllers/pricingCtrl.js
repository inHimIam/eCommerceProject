(function() {

  angular
    .module('meanApp')
    .controller('pricingCtrl', pricingCtrl);

    function pricingCtrl () {
      var vm = this;
      
      console.log('pricing controller is running');
    }

})();
