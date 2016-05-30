(function (module) {

    var mainCtrl = ['$scope', '$http', 'advertService', function ($scope, $http, advertService) {
		advertService.queryAdverts().$promise.then(function(response) {
			$scope.adverts = response;
			$scope.choosePage();
			$scope.updatePagination($scope.results);
		});
		$scope.resultQty = [5, 10, 50, 100];
		$scope.qtyOnPage = $scope.resultQty[0];

		$scope.choosePage = function(pageNumber) {
			pageNumber = pageNumber || 0;
			$scope.startNum = $scope.qtyOnPage * pageNumber;
			$scope.endNum = $scope.qtyOnPage * (1 + pageNumber);
		};

		$scope.updatePagination = function(newValue) {
			if (newValue !== undefined) {
				$scope.pageNumArray = [];
				var arrLength = Math.ceil(newValue.length / $scope.qtyOnPage);
				for (var i = 0; i < arrLength; i++) {
					$scope.pageNumArray.push(i * $scope.qtyOnPage);
				}
			}
		};

		$scope.$watch('results', $scope.updatePagination);

		$scope.deleteItem = function(index) {
			advertService.deleteAdvert(index).$promise.then(function(response) {
				$scope.adverts = advertService.queryAdverts();
			});
		}
    }];

    module.controller("mainCtrl", mainCtrl);

}(angular.module("app")));