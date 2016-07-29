(function() {
	angular
		.module('footballApp')
		.directive('footballersData', footballersData);

		footballersData.$inject = [
			'footballersFactory'
		];

		function footballersData(footballersFactory) {
			return {
				restrict: 'E',
				templateUrl: './frontend/templates/footballersData.html',
				link: footballersFunction
			}

			function footballersFunction(scope) {
				var vm = this;

				footballersFactory.ajaxItems()
					.then(function(data) {
						scope.footballers = data;
						console.log(scope.footballers);
					});

				scope.deleteFootballer = function(id) {
					footballersFactory.deleteFootballer(id);
					scope.footballers.splice(id, 1);
				}

				scope.onEditFootballer = function(id) {
					scope.showForm = true;
					
					scope.id = id;
					scope.firstName = scope.footballers[id].firstName;
					scope.lastName = scope.footballers[id].lastName;
					scope.email = scope.footballers[id].email;
				}

				scope.saveFootballer = function(id, firstName, lastName, email) {
					scope.footballers[id].firstName = firstName;
					scope.footballers[id].lastName = lastName;
					scope.footballers[id].email = email;
					
					var footballerData = {
						firstName: scope.footballers[id].firstName,
						lastName: scope.footballers[id].lastName,
						email: scope.footballers[id].email
					};

					footballersFactory.updateFootballer(scope.footballers[id].id, footballerData);
				}

				scope.cancelEditting = function() {
					scope.showForm = false;
				}
			}
		}
})();