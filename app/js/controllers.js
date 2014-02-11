'use strict';

/* Controllers */

angular.module('restApp.controllers', [])
  .controller('RequestCtrl', ['$scope', function($scope) {
  	//$scope.requestUrl = "my new url";
  	//$scope.sample = "hello";
  	$scope.rVerb = "GET";
	$scope.sendRequest = function() {
		    	alert($scope.requestUrl + " " + $scope.rVerb);
	};

  }])
  .controller('AboutCtrl', function() {

  });