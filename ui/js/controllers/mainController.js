(function (module) {

    var mainCtrl = function ($scope, $http, advertService) {
        $http({
            method: 'POST',
            url: 'json/adverts.json'
        }).then(function successCallback(response) {
            $scope.adverts = response.data;
        }, function errorCallback(response) {
            console.error('ERROR:', response);
        });

		//advertService.query(function(response) {
		//	console.log('response=', response.$promise.then);
		//});
		//var response = advertService.query().$promise.then(function(data) {
		//	console.log('data=', data);
		//});

		//console.log('response = ', response.$promise.then());
    };

    module.controller("mainCtrl", mainCtrl);

}(angular.module("app")));