'use strict';


// Declare app level module which depends on filters, and services
angular.module('restApp', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap',
  'restApp.filters',
  'restApp.services',
  'restApp.directives',
  'restApp.controllers'
])
.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'RequestCtrl'})
  				      .when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'})
  				      .otherwise({redirectTo: '/home'});
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
