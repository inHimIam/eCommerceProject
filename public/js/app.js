(function () {

  angular.module('meanApp', ['ngRoute']);

  function config ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
        templateUrl: './views/register.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: './views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      .when('/profile', {
        templateUrl: './views/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      })
      .when('/pricing', {
        templateUrl: './views/pricing.html',
        controller: 'pricingCtrl',
        controllerAs: 'vm'
      })
      // .when('admin', {
      //   templateUrl: './public/js/directives/admin/adminTemplate.html',
      //   controller: 'adminController',
      //   controllerAs: 'vm'
      // })
      .otherwise({redirectTo: '/'});
  }

  function run($rootScope, $location, authentication) {
    $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !authentication.isLoggedIn()) {
        $location.path('/');
      }
    });
  }

  angular
    .module('meanApp')
    .config(['$routeProvider', '$locationProvider', config])
    .run(['$rootScope', '$location', 'authentication', run]);

})();
