'use strict'

var module = angular.module('demo.controllers', []);
module.controller("UserController", [ "$scope", "UserService",
		function($scope, UserService) {
	
			$scope.businessGroup = [];
			$scope.requestType = [];
			$scope.policies = [];
			$scope.datas= [];
			
			$scope.data = {};
			
			UserService.getBusinessGroup().then(function(value) {
				$scope.businessGroup = value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			UserService.getRequestType().then(function(value) {
				$scope.requestType = value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			UserService.getPolicies().then(function(value) {
				$scope.policies = value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			
			
			$scope.add = function() {
				console.log("add");
				$scope.datas.push(angular.copy($scope.data));
				
			}

			$scope.saveUser = function() {
				$scope.userDto.skillDtos = $scope.skills.map(skill => {
					return {skillId: null, skillName: skill};
				});
				UserService.saveUser($scope.userDto).then(function() {
					console.log("works");
					UserService.getAllUsers().then(function(value) {
						$scope.allUsers= value.data;
					}, function(reason) {
						console.log("error occured");
					}, function(value) {
						console.log("no callback");
					});

					$scope.skills = [];
					$scope.userDto = {
						userId : null,
						userName : null,
						skillDtos : []
					};
				}, function(reason) {
					console.log("error occured");
				}, function(value) {
					console.log("no callback");
				});
			}
		} ]);