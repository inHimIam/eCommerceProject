(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
    $scope.personal_art =
        [
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg', desc: "broken sorry :(", title: "bookmark"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg', desc: "just a little granny", title: "granny"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg', desc: "hi", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg', desc: "", title: ""},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:15.jpg', desc: "", title: ""}
        ]
     $scope.commissions = 
        [      
            {url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg', desc: "", title: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:2.jpg', desc: "", title: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:3.jpg', desc: "", title: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:4.jpg', desc: "", title: ""},
            {url: '../Images/Commissions/by_sicilianvalkyrie:5.jpg', desc: "", title: ""}
        ]
    $scope.showDesc = false;
    $scope.description = function() {
        $scope.showDesc = !$scope.showDesc;
    };
    }
    })();
