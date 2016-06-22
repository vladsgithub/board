(function (module) {

	var mainConfig = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
		function ($stateProvider, $urlRouterProvider, $locationProvider) {
			$urlRouterProvider.when('', '/');
			$urlRouterProvider.otherwise('/404');

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/components/home/home.html'
				})
				.state('adverts', {
					url: '/adverts',
					templateUrl: 'app/components/list/list.html',
					controller: 'listCtrl'
				})
				.state('advert', {
					url: '/adverts/:number',
					templateUrl: 'app/components/advert/advert.html',
					controller: 'advertCtrl'
				})
				.state('newAdvert', {
					url: '/new-advert',
					templateUrl: 'app/components/advert/advert.html',
					controller: 'newAdvertCtrl'
				})
				.state('404', {
					url: '/404',
					template: '<h1>The page is not found</h1>'
				});


			$locationProvider.html5Mode(true);
		}];

	module.config(mainConfig);

}(angular.module("app")));