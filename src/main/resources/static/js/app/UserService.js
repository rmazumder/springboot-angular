'use strict'

angular.module('demo.services', []).factory('UserService',
		[ "$http", "CONSTANTS", function($http, CONSTANTS) {
			var service = {};
			
			service.getBusinessGroup = function() {
				return $http.get(CONSTANTS.getBusinessGroup);
			}
			service.getRequestType = function() {
				return $http.get(CONSTANTS.getRequestTypes);
			}
			service.getPolicies = function() {
				return $http.get(CONSTANTS.getPolicies);
			}
			
			service.saveData = function(data) {
				return $http.post(CONSTANTS.saveData, data);
			}
			
			return service;
		} ]);