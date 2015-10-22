// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var yogaApp = angular.module('yogaApp', ['ionic']);

yogaApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
        url: "/",
        templateUrl: "templates/main.html",
    })
    .state('tadasana1', {
        url: "/tadasana",
        templateUrl: "templates/tadasana.html",
    })
    .state('urdhvahastasana1', {
        url: "/urdhvahastasana",
        templateUrl: "templates/urdhva-hastasana.html",
    })
    .state('uttanasana1', {
        url: "/uttanasana",
        templateUrl: "templates/uttanasana.html",
    })
    .state('chaturangadandasana', {
        url: "/chaturangadandasana",
        templateUrl: "templates/chaturanga-dandasana.html",
    })
    .state('urdhvamukhasvanasana', {
        url: "/urdhvamukhasvanasana",
        templateUrl: "templates/urdhva-mukha-svanasana.html",
    })
    .state('adhomukhasvanasana', {
        url: "/adhomukhasvanasana",
        templateUrl: "templates/adho-mukha-svanasana.html",
    })
    .state('uttanasana2', {
        url: "/uttanasanaend",
        templateUrl: "templates/uttanasana2.html",
    })
    .state('urdhvahastasana2', {
        url: "/urdhvahastasanaend",
        templateUrl: "templates/urdhva-hastasana2.html",
    })
    .state('tadasana2', {
        url: "/tadasanaend",
        templateUrl: "templates/tadasana2.html",
    });

    $urlRouterProvider.otherwise('/');
});
