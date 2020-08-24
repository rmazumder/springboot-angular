'use strict'

var demoApp = angular.module('demo', [ 'ui.bootstrap', 'demo.controllers',
		'demo.services' ]);
demoApp.constant("CONSTANTS", {
	saveData : "/idms/save",
	getBusinessGroup : "/idms/businessGroup",
	getRequestTypes : "/idms/requestTypes",
	getPolicies : "/idms/policies"
});