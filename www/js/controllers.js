// Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
  $scope.Pokebola = [];
  for(var M=1; M<=500;M++)
  $http({
    method: "GET",
    url: "https://pokeapi.co/api/v2/pokemon/" + M
  }).then(function succes(x){
    $scope.Pokebola.push(x);
  })
})
// 01000001 01101110 01100100 01110010 01100101 00100000 01001111 01110011 01101111 01110010 01101001 01101111

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
