(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
        console.log('images ctrl is up')
     $scope.images = 
        [ 
            { 
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
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:1.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:2.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:3.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:4.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:5.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:6.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:7.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:8.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:9.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:10.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:11.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:12.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:13.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:14.jpg'},
                    {url: '../Images/Personal-Art/by_icilianvalkyrie:15.jpg'},
                ]
            }

        ]
    };

})();
