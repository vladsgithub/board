(function (module) {
	var item = function() {
		return {
			restrict: 'A',
			templateUrl: 'app/shared/item/item.html'
		}
	};

	module.directive('ngItem', item);

}(angular.module('app')));