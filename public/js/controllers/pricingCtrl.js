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
    // function for providing sample image
    // take in customer input from newCommission and compare it to populate a sample image based //on criteria 
    //if(vm.newCommission.ArtType == 'Black&White' && vm.newCommission.Background == simple-background && newCommission.NumberofCharachters == 2) { sampleImg ='./images/sample....'} if(vm.newCommission.ArtType == 'Inked' && vm.newCommission.Background == simple-background && newCommission.NumberofCharachters == 2)

    //use for the sample image on pricing 
        //   $scope.sampleImage = [
        //       {background: '', artType: '', numChar: '', url: 'images/example....'}
        //   ]

})();
