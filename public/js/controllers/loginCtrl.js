(function () {

  angular
  .module('artistApp')
  .controller('loginCtrl', loginCtrl);

  loginCtrl.$inject = ['$location', 'authentication'];
  function loginCtrl($location, authentication) {
    var vm = this;

    vm.credentials = {
      email: "",
      password: "",
      admin: Boolean
    };

    vm.onSubmit = function () {
      authentication
        .login(vm.credentials)
        .error(function(err){
          alert(err);
        })
        .then(function(){
          if(!vm.credentials.admin == false) {
          $location.path('profile');} 
          ;
        });
    };

    // vm.credentialsAdmin ={
    //     email : "",
    //     password : "",
    //     admin : true
    // }
    // vm.onSubmit = function(){
    //   authentication
    //   .login(vm.credentialsAdmin)
    //   .error(function(err) {
    //     alert(err);
    //   })
    //   .then(function(){
    //     $location.path('/admin');
    //   });
    // };


  }

})();
