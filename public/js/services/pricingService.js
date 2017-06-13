(function () {

  angular
    .module('artistApp')
    .factory('pricingService', pricingService);

  pricingService.$inject = ['$http', '$window'];
  function pricingService ($http, $window) {



    getCommission = function(submissionRequest) {
        console.log('service invoked');
      return $http.post('/api/product/', submissionRequest).success(function(data){
          return data;
      });
    };

    return {
      getCommission: getCommission
    };
  }

})();
