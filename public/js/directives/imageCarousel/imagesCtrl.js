(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
    $scope.personal_art =
        [
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg', desc: "broken sorry :(", title: "bookmark"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg', desc: "granny"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg', desc: "hi"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg', desc: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:15.jpg', desc: ""}
        ]
     $scope.commissions = 
        [      
            {url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg', desc: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:2.jpg', desc: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:3.jpg', desc: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:4.jpg', desc: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:5.jpg', desc: ""}
        ]
    };
    })();
