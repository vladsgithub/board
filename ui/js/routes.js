(function (module) {

	var mainConfig = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
					controller: ['$scope', '$stateParams', '$state', 'advertService', function ($scope, $stateParams, $state, advertService) {
						advertService.getAdvert($stateParams.number).$promise.then(function (response) {
							$scope.advert = response;
							$scope.title = $scope.advert.title;

							if ($scope.advert.id === undefined) {
								$state.go('404');
							}
						});

						$scope.submit = function () {
							var question = confirm("Do you want to change this advert? Are you sure?");

							if (question) {
								advertService.updateAdvert($scope.advert);
							}
						};
					}]
				})
				.state('newAdvert', {
					url: '/new-advert',
					templateUrl: 'templates/advert.html',
					controller: ['$scope', '$state', 'advertService', function ($scope, $state, advertService) {
						$scope.title = 'New advert';

						$scope.submit = function () {
							var question = confirm("Do you want to add this advert? Are you sure?");

							if (question) {
								advertService.addAdvert($scope.advert).$promise.then(function (response) {
									$scope.advert = response;
									$state.go('advert', {number: $scope.advert.id});
								});
							}
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