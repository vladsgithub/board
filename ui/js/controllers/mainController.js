//Controllers

(function (module) {

	var mainCtrl = ['$rootScope', '$scope', '$http', 'advertService',
		function ($rootScope, $scope, $http, advertService) {
			$scope.resultQty = [5, 10, 50, 100];
			$scope.qtyOnPage = $scope.resultQty[0];

			$scope.choosePage = function (pageNumber) {
				pageNumber = pageNumber || 0;
				$scope.activeItem = pageNumber;
				$scope.startNum = $scope.qtyOnPage * pageNumber;
				$scope.endNum = $scope.qtyOnPage * (1 + pageNumber);
			};

			$scope.updatePagination = function (newValue) {
				if (newValue !== undefined) {
					$scope.pageNumArray = [];
					var arrLength = Math.ceil(newValue.length / $scope.qtyOnPage);
					for (var i = 0; i < arrLength; i++) {
						$scope.pageNumArray.push(i * $scope.qtyOnPage);
					}
				}
			};

			$scope.getAdverts = function () {
				advertService.queryAdverts().then(function (response) {
					$scope.adverts = response;
					$scope.choosePage();
					$scope.updatePagination($scope.results);
				});
			};

			$scope.deleteItem = function (index) {
				var question = confirm("Do you want to delete this advert? Are you sure?");

				if (question) {
					advertService.deleteAdvert(index).then(function (response) {
						$scope.getAdverts();
					});
				}
			};

			$scope.$watch('results', $scope.updatePagination);
		}];

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

	module.controller('mainCtrl', mainCtrl);
	module.controller('advertCtrl', advertCtrl);
	module.controller('newAdvertCtrl', newAdvertCtrl);

}(angular.module("app")));