(function (module) {

    var mainCtrl = function ($scope, $http, advertService) {
		$scope.adverts = advertService.queryAdverts();
    };

    module.controller("mainCtrl", mainCtrl);

}(angular.module("app")));