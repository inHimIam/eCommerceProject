(function() {

  angular
    .module('artistApp')
    .controller('imagesCtrl', imagesCtrl);

    function imagesCtrl($scope) {
      $scope.personal_art =
          [
              // {url: '../Images/Personal-Art/by_sicilianvalkyrie:1.jpg', desc: 'broken sorry :(', title: 'Night and Twilight Bookmarks'},
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:2.jpg',
              desc: 'just a little granny',
              title: 'Granny Cheesecake'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:3.jpg',
              desc: '',
              title: 'The Ghost Woman'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:4.jpg',
              desc: 'My friend Natisha',
              title: 'Portrait of Natisha'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:5.jpg',
              desc: 'A gift for a friend',
              title: 'Elly vs Fangirls'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:6.jpg',
              desc: 'From the Time of the Twins a fantasy novel in the Dragonlance series written by Margaret Weis and Tracy Hickman.',
              title: 'Rastiln & Crysania'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:7.jpg',
              desc: '',
              title: 'Druid'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:8.jpg',
              desc: 'Oil practice',
              title: 'Waterhouse'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:9.jpg',
              desc: '',
              title: 'Dark Elf Sketch'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:10.jpg',
              desc: '',
              title: 'Adventurers Tales'},
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:11.jpg',
              desc: '',
              title: 'The Seer'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:12.jpg',
              desc: '',
              title: 'Shimon'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:13.jpg',
              desc: '',
              title: 'Elfa'
              },
              {
              url: '../Images/Personal-Art/by_sicilianvalkyrie:14.jpg',
              desc: '',
              title: 'Dark Elf Assassin'
              }
          ]
       $scope.commissions =
          [
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:15.jpg',
              desc: 'hi ho',
              title: 'Could you Help Me (Night)',
              client: '"Ulstermuse" (Deviantart)',
              testimonial: 'she\'\s great!!'
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:15b.jpg',
              desc: '',
              title: 'Could you Help Me',
              client: 'Ulstermuse Deviant Art)',
              testimonial: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:16.jpg',
              desc: '',
              title: 'The Focal Pointers',
              client: 'Rochard Scott: "The Destiny Saga"',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:17.jpg',
              desc: '',
              title: 'The Ragers',
              client: 'Rochard Scott: "The Destiny Saga"',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:18.jpg',
              desc: '',
              title: 'Warrior',
              client: '"ThatOddOne" (Deviantart)',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:19.jpg',
              desc: '',
              title: 'A willing Prey',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:20.jpg',
              desc: '',
              title: 'Aesha Gorani',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:20b.jpg',
              desc: '',
              title: 'Aesha Gorani (detail)',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:21.jpg',
              desc: '',
              title: 'Autumn',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:22.jpg',
              desc: '',
              title: 'Beer Night',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:23.jpg',
              esc: '',
              title: 'Bird of Prey',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:24.jpg',
              desc: '',
              title: 'Boots',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:25.jpg',
              desc: '',
              title: 'Born To Rule',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:26.jpg',
              desc: '',
              title: 'Bugbear Paladin',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:27.jpg',
              desc: '',
              title: 'Celina',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:28.jpg',
              desc: '',
              title: 'Coffee Private',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:29.jpg',
              desc: '',
              title: 'Dreadfully Pink',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:30.jpg',
              desc: '',
              title: 'Hatir',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:31.jpg',
              desc: '',
              title: 'Leaving Town',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:32.jpg',
              desc: '',
              title: 'Matecito',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:33.jpg',
              desc: '',
              title: 'Mi Amiga La Llama',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:34.jpg',
              desc: 'Gift for a friend',
              title: 'Peri',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:35.jpg',
              desc: '',
              title: 'Reading on the Subway',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:36.jpg',
              desc: '',
              title: 'Shol Ashys',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:37.jpg',
              desc: '',
              title: 'Snowball War',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:38.jpg',
              desc: '',
              title: 'Snowball War (Detailed)',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:39.jpg',
              desc: '',
              title: 'The Francellans',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:40.jpg',
              desc: '',
              title: 'The Long Watch',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:41.jpg',
              desc: '',
              title: 'The Market',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:42.jpg',
              desc: '',
              title: 'The Wedding',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:43.jpg',
              desc: '',
              title: 'Vithra',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:44.jpg',
              desc: 'Book Cover',
              title: 'Young Adventurers',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:45.jpg',
              desc: '',
              title: 'Yrsa',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:46.jpg',
              desc: '',
              title: 'Celes',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:47.jpg',
              desc: '',
              title: '',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:48.jpg',
              desc: '',
              title: 'Voodom',
              client: '',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:49.jpg',
              desc: '',
              title: 'Vael',
              client: 'Yunaris',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:50.jpg',
              desc: '',
              title: 'Brinn Colored Version',
              client: 'kwbunyap Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:51.jpg',
              desc: '',
              title: 'Aurore Group',
              client: 'Rochard Scott',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:52.jpg',
              desc: '',
              title: 'Dark Elf Lineage II',
              client: 'astarotharcane Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:53.jpg',
              desc: '',
              title: 'Death Awaits',
              client: 'celesv Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:54.jpg',
              desc: '',
              title: 'Don\'t Mess With Me',
              client: 'Raane23 Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:55.jpg',
              desc: '',
              title: 'Rillie',
              client: 'kwbunyap Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:56.jpg',
              desc: '',
              title: 'Twins',
              client: 'Yunaris Deviant Art',
              testimonial: ''
              },
              {
              url: '../Images/Commissions/by_sicilianvalkyrie:57.jpg',
              desc: '',
              title: 'Viking',
              client: 'Xullraezauvirr Deviant Art',
              testimonial: ''
              }
          ]

      $scope.dataLoaded=true;
    }
})();
