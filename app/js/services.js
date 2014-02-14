'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('restApp.services', [])
.value('version', '0.1')
.factory('RestXHR', function ($resource) {
    return $resource('http://gdata.youtube.com/feeds/api/playlists/56D792A831D0C362', {}, {
    	send: {method:'GET'}
    });
});