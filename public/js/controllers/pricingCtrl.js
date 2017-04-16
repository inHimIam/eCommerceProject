(function() {

  angular
    .module('artistApp')
    .controller('pricingCtrl', pricingCtrl);

    pricingCtrl.$inject = ['$location', 'pricingService'];
    function pricingCtrl($location, pricingService) {
        var vm = this;

        vm.newCommission = {
            ArtType: '',
            Description: '',
            NumberCharacters: '',
            Background: ['No-background', 'Simple-background', 'Complex-background'],
            ExampleImage: ''
        };

        vm.onSubmit = function() {
            console.log('submitting your data');
            pricingService
                .getCommission(vm.newCommission)
                .error(function(err){
                    alert(err);
                })
                .then(function(res) {
                    console.log('res', res);
                });
        };
    }

})();
