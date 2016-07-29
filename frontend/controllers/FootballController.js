(function() {
	'use strict';
	var module = angular.module('footballApp');
	module.controller('FootballController', FootballController);
	FootballController.$inject = [		
		'$http'
	];

	function FootballController($http) {
		$http.get('../footballers.json').success(function(data) {
		$scope.footballers = data;
		console.log($scope.footballers);
}); 
	}
})();