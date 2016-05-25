(function () {
    'use strict';
    angular.module('app', ['ui.router', 'ngResource'])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.when('', '/');
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
					controller: function($scope, $stateParams, advertService) {
						$scope.advert = advertService.getAdvert($stateParams.number);

						$scope.submit = function() {
							advertService.updateAdvert($scope.advert).$promise.then(function(data) {
								console.log('data of updateAdvert: ', data);
							});
							console.log('$scope.advert=', $scope.advert);
						};
					}
				})
				.state('404', {
					url: '/404',
					template: '<h1>The page is not found</h1>'
				});

			
			$locationProvider.html5Mode(true);
		});
})();
