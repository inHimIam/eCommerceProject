(function () {

  angular
    .module('artistApp')
    .factory('pricingService', pricingService);

  pricingService.$inject = ['$http', '$window'];
  function pricingService ($http, $window) {



    getCommission = function(submissionRequest) {
      return $http.post('/api/register', submissionRequest).success(function(data){
        saveToken(data.token);
      });
    };

    return {
      getCommission : getCommission
    };
  }

})();
