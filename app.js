(function() {
	'use strict';

	angular
		.module('footballApp', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/main', {
					//templateUrl: 'templates/footballersData.html',
					controller: 'FootballController'
				})
				// .when('/notmain', {
				// 	templateUrl: './notmain.html',
				// 	controller: 'NotMainController'
				// })
				// .when('/validation', {
				// 	templateUrl: './validation/form.html',
				// 	controller: 'ValidationController'
				// })
				.otherwise({
					redirectTo: '/main'
				});
		}]);
})()