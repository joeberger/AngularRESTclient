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
  .controller('GridCtrl', function($scope) {
    $scope.myData = [{name: "Param1", number: 50},
                     {name: "Param2", number: 43},
                     {name: "Param3", number: 27},
                     {name: "Param4", number: 29},
                     {name: "Param5", number: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEdit: true,
        columnDefs: [{field: 'name', displayName: 'Name', enableCellEdit: true}, 
                     {field:'number', displayName:'Value', enableCellEdit: true}]
    };
  })
  .controller('AboutCtrl', function() {

  });