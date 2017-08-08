angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: './public/index.html',
			controller: 'NerdController'
		})

		// .when('/nerds', {
		// 	templateUrl: 'views/nerd.html',
		// 	controller: 'NerdController'
		// })
		//
		// .when('/geeks', {
		// 	templateUrl: 'views/geek.html',
		// 	controller: 'GeekController'
		// });

	$locationProvider.html5Mode(true);

}]);
