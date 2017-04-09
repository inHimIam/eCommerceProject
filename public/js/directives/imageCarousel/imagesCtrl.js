(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
    $scope.personal_art =
        [
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg', desc: "broken sorry :(", title: "Night and Twilight Bookmarks"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg', desc: "just a little granny", title: "Granny Cheesecake"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg', desc: "", title: "The Ghost Woman"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg', desc: "My friend Natisha", title: "Portrait of Natisha"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg', desc: "A gift for a friend", title: "Elly vs Fangirls"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg', desc: "From the Time of the Twins a fantasy novel in the Dragonlance series written by Margaret Weis and Tracy Hickman.", title: "Rastiln & Crysania"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg', desc: "", title: "Druid"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg', desc: "Oil practice", title: "Waterhouse"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg', desc: "", title: "Dark Elf Sketch"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg', desc: "", title: "Adventurer's Tales"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg', desc: "", title: "The Seer"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg', desc: "", title: "Shimon"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg', desc: "", title: "Elfa"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg', desc: "", title: "Dark Elf Assassin"}
        ]
     $scope.commissions = 
        [      
            {url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg', desc: "", title: "Could you Help Me Night"},
            {url: '../Images/Commissions/by_sicilianvalkyrie:2.jpg', desc: "", title: "Could you Help Me"},
            {url: '../Images/Commissions/by_sicilianvalkyrie:3.jpg', desc: "", title: "The Focal Pointers"},
            {url: '../Images/Commissions/by_sicilianvalkyrie:4.jpg', desc: "", title: "The Ragers"},
            {url: '../Images/Commissions/by_sicilianvalkyrie:5.jpg', desc: "", title: "Warrior"},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:15.jpg', desc: "", title: "Voddom"}
        ]
    $scope.showDesc = false;
    $scope.description = function() {
        $scope.showDesc = !$scope.showDesc;
    };
    }
    })();
