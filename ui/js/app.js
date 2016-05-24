(function () {
    'use strict';
    angular.module('app', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.otherwise('/404');
			
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'templates/home.html'
				})
				.state('adverts', {
					url: '/adverts',
					templateUrl: 'templates/list.html',
					controller: 'mainCtrl'
				})
				.state('advert', {
					url: '/adverts/:number',
					templateUrl: 'templates/advert.html',
					controller: function($scope, $stateParams, $http) {
						$http({
							method: 'POST',
							url: 'json/adverts.json'
						}).then(function successCallback(response) {
							$scope.advert = response.data[$stateParams.number];
						}, function errorCallback(response) {
							console.error('ERROR:', response);
						});
					}
				})
				.state('404', {
					url: '/404',
					template: '<h1>The page is not found</h1>'
				});

			//$locationProvider.html5Mode(true);
		});
})();
