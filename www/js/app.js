// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var yogaApp = angular.module('yogaApp', ['ionic']);

yogaApp.controller("yogaCtrl", function($scope){
    $scope.yogaTitle = "Yoga for Beginners";
});

yogaApp.controller('tadasanaCtrl', function($scope) {

})

yogaApp.controller('urdhvaHastasanaCtrl', function($scope) {

})

yogaApp.controller('uttanasanaCtrl', function($scope) {

})

yogaApp.controller('chaturangaDandasanaCtrl', function($scope) {

})

yogaApp.controller('urdhvaMukhaSvanasanaCtrl', function($scope) {

})

yogaApp.controller('adhoMukhaSvanasanaCtrl', function($scope) {

})

yogaApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/main",
        templateUrl: "www/templates/main.html",
        controller: 'yogaCtrl'
    })
    .state('tadasana', {
        url: "/tadasana",
        templateUrl: "www/templates/tadasana.html",
        controller: 'tadasanaCtrl'
    })
    .state('urdhvahastasana', {
        url: "/urdhvahastasana",
        templateUrl: "www/templates/urdhva-hastasana.html",
        controller: 'urdhvaHastasanaCtrl'
    })
    .state('uttanasana', {
        url: "/uttanasana",
        templateUrl: "www/templates/uttanasana.html",
        controller: 'uttanasanaCtrl'
    })
    .state('chaturangadandasana', {
        url: "/chaturangadandasana",
        templateUrl: "www/templates/chaturanga-dandasana.html",
        controller: 'chaturangaDandasanaCtrl'
    })
    .state('urdhvamukhasvanasana', {
        url: "/urdhvamukhasvanasana",
        templateUrl: "www/templates/urdhva-mukha-svanasana.html",
        controller: 'urdhvaMukhaSvanasanaCtrl'
    })
    .state('adhomukhasvanasana', {
        url: "/adhomukhasvanasana",
        templateUrl: "www/templates/adho-mukha-svanasana.html",
        controller: 'adhoMukhaSvanasanaCtrl'
    });
    // If none of the above states are matched, use this as the fallback:
    $urlRouterProvider.otherwise('main');
});
