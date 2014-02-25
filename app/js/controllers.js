'use strict';

/* Controllers */

angular.module('restApp.controllers', [])
  .controller('RequestCtrl', function($scope, $resource, $http) {
  	$scope.rVerb = "GET";

  	$scope.sendRequest=function(){
      debugger;
        $http({
              method: $scope.rVerb,
              url: $scope.requestUrl,              
              data:  $scope.requestPayload,
              headers: $scope.requestHeaders
            })
            .success(function(data, status, headers, config) {
                $scope.headers = headers;
                $scope.config = config;
                $scope.status = status;
                $scope.data = data;
            })
            .error(function(data, status, headers, config) {
                $scope.data = data || "Request failed";
                $scope.status = status;
                $scope.headers = headers;
                $scope.config = config;
            });
    };
  })
  .controller('AboutCtrl', function() {

  });