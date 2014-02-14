'use strict';

/* Controllers */

angular.module('restApp.controllers', [])
/*
  .controller('FetchCtrl', function($scope, $http, $templateCache) {
  $scope.method = 'GET';
  $scope.url = 'http-hello.html';
 
  $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;
 
    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  };
 
  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };
})
*/

  .controller('RequestCtrl', function($scope, $resource, $http) {
  	//$scope.requestUrl = "my new url";
  	//$scope.sample = "hello";
  	//$http.defaults.headers.common.push['Access-Control-Allow-Origin', '*'];
    //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  	$scope.rVerb = "GET";

  	$scope.sendRequest=function(){
        $http({
              method: $scope.rVerb,
              url: $scope.requestUrl,              
              data:  $scope.requestPayload
              // headers:{
              //   'Access-Control-Allow-Origin': '*',
              //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              //   'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
              // }
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



     //    	.success(function(data, status, headers, config) 
     //          {
     //            var strJSON=data;
     //            debugger;
     //            if(strJSON.status=="Success")
     //            {
     //            	// data
     //            }
     //            else
     //            {
     //                $scope.responseObj=strJSON.status;
     //            }
     //          })
     //        .error(function(data, status, headers, config) {
			  //   // called asynchronously if an error occurs
			  //   // or server returns response with an error status.
			  // });
    };


	// $scope.sendRequest = function() {
	// 	    	//alert($scope.requestUrl + " " + $scope.rVerb);
	// 	//$scope.responseObj = RestXHR.get();  
	// 	$scope.rData = RestXHR.send(function(data){		  
	// 	  $scope.responseObj = eval(data);
 //      }, function(err){
 //      	$scope.responseObj = angular.fromJson(eval(err.data)).errmsg;				  

 //      });
	// };


  })
  .controller('AboutCtrl', function() {

  });