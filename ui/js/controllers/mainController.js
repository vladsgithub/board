(function (module) {

    var mainCtrl = function ($scope, $http) {
        $http({
            method: 'POST',
            url: 'json/adverts.json'
        }).then(function successCallback(response) {
            $scope.adverts = response.data;
        }, function errorCallback(response) {
            console.error('ERROR:', response);
        });
    };

    module.controller("mainCtrl", mainCtrl);

}(angular.module("app")));