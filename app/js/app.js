'use strict';


// Declare app level module which depends on filters, and services
angular.module('restApp', [
  'ngRoute',
  'restApp.filters',
  'restApp.services',
  'restApp.directives',
  'restApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'RequestCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
