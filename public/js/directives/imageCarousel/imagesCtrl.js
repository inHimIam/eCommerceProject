(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
        console.log('images ctrl is up')
     $scope.images = 
        [ 
            {
                // url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg', 
                commissions: 
                [
                    {url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg'},
                    {url: '../Images/Commissions/by_sicilianvalkyrie:2.jpg'},
                    {url: '../Images/Commissions/by_sicilianvalkyrie:3.jpg'},
                    {url: '../Images/Commissions/by_sicilianvalkyrie:4.jpg'},
                    {url: '../Images/Commissions/by_sicilianvalkyrie:5.jpg'},
                ],
                personal_art: 
                [
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg'},
                    {url: '../Images/Personal-Art/by_sicilianvalkyrie:15.jpg'},
                ]
            }

        ]
    };

})();
