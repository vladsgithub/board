(function(module) {

	var mainConfig = ['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
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
				controller: ['$scope', '$stateParams', '$state', 'advertService', function($scope, $stateParams, $state, advertService) {
					advertService.getAdvert($stateParams.number).$promise.then(function(response) {
						$scope.advert = response;
						if ($scope.advert.id === undefined) {
							$state.go('404');
						}
					});

					$scope.submit = function() {
						advertService.updateAdvert($scope.advert);
					};
				}]
			})
			.state('newAdvert', {
				url: '/new-advert',
				templateUrl: 'templates/advert.html',
				controller: ['$scope', 'advertService', function($scope, advertService) {
					$scope.submit = function() {
						$scope.advert = advertService.addAdvert($scope.advert);
					};
				}]
			})
			.state('404', {
				url: '/404',
				template: '<h1>The page is not found</h1>'
			});


		$locationProvider.html5Mode(true);
	}];

	module.config(mainConfig);

}(angular.module("app")));