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
    //var saveInput= (function(bkgd, artType, numCharacters){
  //give options to customer via inputCriteria to make a choice
  //var finalChoice = [bkgd, artType, numCharacters];
  //overide inputCriteria with customer selected data and save it to an array
  //return the array of customer data
    //return function(){
      //var savedData = [];
      //var customerData= {background: '', art_Type: '', characters: ''};
      //customerData.background= finalChoice[0];
      //customerData.art_Type = finalChoice[1];
      //customerData.characters= finalChoice[2];
      //savedData.push(customerData);
      //return savedData;
    //};
//})('complex', 'CGI', 3);
//saveInput();

})();
