(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl, function($scope){
        $scope.images = 
        [ 
            { 
                commissions: 
                [
                "../Images/Commissions/by_sicilianvalkyrie:1.jpg",
                "../Images/Commissions/by_sicilianvalkyrie:2.jpg",
                "../Images/Commissions/by_sicilianvalkyrie:3.jpg",
                "../Images/Commissions/by_sicilianvalkyrie:4.jpg",
                "../Images/Commissions/by_sicilianvalkyrie:5.jpg",
                ],
                personal_art: 
                [
                "../Images/Personal-Art/by_icilianvalkyrie:1.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:2.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:3.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:4.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:5.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:6.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:7.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:8.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:9.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:10.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:11.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:12.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:13.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:14.jpg",
                "../Images/Personal-Art/by_icilianvalkyrie:15.jpg",
                ]
            }

        ]
    });

    function imageCtrl () {
      console.log('imageCtrl controller is running');
    }

})();
