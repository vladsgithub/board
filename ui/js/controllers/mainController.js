(function (module) {

    var mainCtrl = function ($scope, $http, advertService) {
		$scope.adverts = advertService.queryAdverts();

		$scope.deleteItem = function(index) {
			advertService.deleteAdvert(index).$promise.then(function(response) {
				$scope.adverts = advertService.queryAdverts();
			});
		}
    };

    module.controller("mainCtrl", mainCtrl);

}(angular.module("app")));