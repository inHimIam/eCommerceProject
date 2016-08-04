(function() {

  angular
    .module('artistApp')
    .controller('pricingCtrl', pricingCtrl);

    pricingCtrl.$inject = ['$location', 'pricingService'];
    function pricingCtrl($location, pricingService) {
        var vm = this;

        vm.newCommission = {
            artType: "",
            description: "",
            characters: "",
            background: "No-background",
            estPrice: ""
        };

        vm.onSubmit = function() {
            console.log('submitting your data');
            pricingService
                .pricing(vm.newCommission)
                .error(function(err){
                    alert(err);
                })
                .then(function() {
                    $location.path('profile');
                });
        };
    }

})();
