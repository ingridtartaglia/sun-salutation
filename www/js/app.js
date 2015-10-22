// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var yogaApp = angular.module('yogaApp', ['ionic']);

yogaApp.controller("sunSalutation", function($scope){
    $scope.yogaTitle = "Sun Salutation";
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

yogaApp.controller('uttanasana2Ctrl', function($scope) {

})

yogaApp.controller('urdhvaHastasana2Ctrl', function($scope) {

})

yogaApp.controller('tadasana2Ctrl', function($scope) {

})



yogaApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "templates/main.html",
        controller: 'yogaCtrl'
    })
    .state('tadasana1', {
        url: "/tadasana",
        templateUrl: "templates/tadasana.html",
        controller: 'tadasanaCtrl'
    })
    .state('urdhvahastasana1', {
        url: "/urdhvahastasana",
        templateUrl: "templates/urdhva-hastasana.html",
        controller: 'urdhvaHastasanaCtrl'
    })
    .state('uttanasana1', {
        url: "/uttanasana",
        templateUrl: "templates/uttanasana.html",
        controller: 'uttanasanaCtrl'
    })
    .state('chaturangadandasana', {
        url: "/chaturangadandasana",
        templateUrl: "templates/chaturanga-dandasana.html",
        controller: 'chaturangaDandasanaCtrl'
    })
    .state('urdhvamukhasvanasana', {
        url: "/urdhvamukhasvanasana",
        templateUrl: "templates/urdhva-mukha-svanasana.html",
        controller: 'urdhvaMukhaSvanasanaCtrl'
    })
    .state('adhomukhasvanasana', {
        url: "/adhomukhasvanasana",
        templateUrl: "templates/adho-mukha-svanasana.html",
        controller: 'adhoMukhaSvanasanaCtrl'
    })
    .state('uttanasana2', {
        url: "/uttanasanaend",
        templateUrl: "templates/uttanasana2.html",
        controller: 'uttanasana2Ctrl'
    })
    .state('urdhvahastasana2', {
        url: "/urdhvahastasanaend",
        templateUrl: "templates/urdhva-hastasana2.html",
        controller: 'urdhvaHastasana2Ctrl'
    })
    .state('tadasana2', {
        url: "/tadasanaend",
        templateUrl: "templates/tadasana2.html",
        controller: 'tadasana2Ctrl'
    });

    $urlRouterProvider.otherwise('/');
});
