(function() {
	var module = angular.module('footballApp', ['ngRoute']);

	module.factory('footballersFactory', footballersFactory);
		footballersFactory.$inject = [
			'$http', '$q'
		]

	function footballersFactory($http, $q) {
		return {
			ajaxItems: function() {
				var deferred = $q.defer();
				$http({ 
					method: "GET", 
					url: "/footballers" 
				}).success(function (data, status, headers, config) {
					deferred.resolve(data);
				}).error(function (data, status, headers, config) {
					deferred.reject(status);
				});
				return deferred.promise;
			},				

			deleteFootballer: function(id) {
				return $http.delete('/footballers/' + id)
					.success(function (data, status, headers, config) {
						console.log("footballer has been deleted");
					}, function (error) {
						console.log('an error occurred', error.data);
					});
			},

			updateFootballer: function(id, data) {
				return $http.put('footballers/' + id, data)
					.success(function (data, status, headers, config) {
						console.log("footballer has been updated");
					}, function (error) {
						console.log('an error occurred', error.data);
					});
			}
		}
	}
})();
 