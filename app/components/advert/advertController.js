(function (module) {

	var advertCtrl = ['$scope', '$stateParams', '$state', 'advertService',
		function ($scope, $stateParams, $state, advertService) {
			$scope.btnName = 'Change';

			advertService.getAdvert($stateParams.number).then(function (response) {
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

			$scope.deleteItem = function (index) {
				var question = confirm("Do you want to delete this advert? Are you sure?");

				if (question) {
					advertService.deleteAdvert(index).then(function (response) {
						$state.go('adverts');
					});
				}
			};
		}];

	var newAdvertCtrl = ['$scope', '$state', 'advertService',
		function ($scope, $state, advertService) {
			$scope.title = 'New advert';
			$scope.btnName = 'Add';

			$scope.submit = function () {
				var question = confirm("Do you want to add this advert? Are you sure?");

				if (question) {
					advertService.addAdvert($scope.advert).then(function (response) {
						$scope.advert = response;
						$state.go('advert', {number: $scope.advert.id});
					});
				}
			};
		}];

	module.controller('advertCtrl', advertCtrl);
	module.controller('newAdvertCtrl', newAdvertCtrl);

}(angular.module("app")));