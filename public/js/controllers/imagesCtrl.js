(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);
    function imagesCtrl($scope) {
    $scope.personal_art =
        [
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg', desc: 'broken sorry :(', title: 'Night and Twilight Bookmarks'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg', desc: 'just a little granny', title: 'Granny Cheesecake'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg', desc: '', title: 'The Ghost Woman'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg', desc: 'My friend Natisha', title: 'Portrait of Natisha'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg', desc: 'A gift for a friend', title: 'Elly vs Fangirls'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg', desc: 'From the Time of the Twins a fantasy novel in the Dragonlance series written by Margaret Weis and Tracy Hickman.', title: 'Rastiln & Crysania'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg', desc: '', title: 'Druid'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg', desc: 'Oil practice', title: 'Waterhouse'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg', desc: '', title: 'Dark Elf Sketch'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg', desc: '', title: 'Adventurers Tales'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg', desc: '', title: 'The Seer'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg', desc: '', title: 'Shimon'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg', desc: '', title: 'Elfa'},
            {url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg', desc: '', title: 'Dark Elf Assassin'}
        ]
     $scope.commissions = 
        [      
            {url: '../Images/Commissions/by_sicilianvalkyrie:1.jpg', desc: '', title: 'Could you Help Me (Night)'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:2.jpg', desc: '', title: 'Could you Help Me'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:3.jpg', desc: '', title: 'The Focal Pointers'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:4.jpg', desc: '', title: 'The Ragers'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:5.jpg', desc: '', title: 'Warrior'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:6.jpg', desc: '', title: 'A willing Prey'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:7.jpg', desc: '', title: 'Aesha Gorani'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:8.jpg', desc: '', title: 'Autumn'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:9.jpg', desc: '', title: 'Beer Night'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:10.jpg', desc: '', title: 'Bird of Prey'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:11.jpg', desc: '', title: 'Boots'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:12.jpg', desc: '', title: 'Born To Rule'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:13.jpg', desc: '', title: 'Bugbear Paladin'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:14.jpg', desc: '', title: 'Celina'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:15.jpg', desc: '', title: 'Coffee Private'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:16.jpg', desc: '', title: 'Dreadfully Pink'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:17.jpg', desc: '', title: 'Hatir'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:18.jpg', desc: '', title: 'Leaving Town'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:19.jpg', desc: '', title: 'Matecito'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:20.jpg', desc: '', title: 'Mi Amiga La Llama'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:21.jpg', desc: 'Gift for a friend', title: 'Peri'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:22.jpg', desc: '', title: 'Reading on the Subway'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:23.jpg', desc: '', title: 'Shol Ashys'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:24.jpg', desc: '', title: 'Snowball War'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:25.jpg', desc: '', title: 'Snowball War (Detailed)'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:26.jpg', desc: '', title: 'The Francellans'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:27.jpg', desc: '', title: 'The Long Watch'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:28.jpg', desc: '', title: 'The Market'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:29.jpg', desc: '', title: 'The Wedding'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:30.jpg', desc: '', title: 'Vithra'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:31.jpg', desc: 'Book Cover', title: 'Young Adventurers'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:32.jpg', desc: '', title: 'Yrsa'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:33.jpg', desc: '', title: 'Celes'},
            {url: '../Images/Commissions/by_sicilianvalkyrie:35.jpg', desc: '', title: 'Voodom'}
        ]
        
    $scope.showDesc = false;
    $scope.description = function() {
        $scope.showDesc = !$scope.showDesc;
    };

    }
    
    })();
