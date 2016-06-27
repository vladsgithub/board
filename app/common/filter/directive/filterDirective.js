(function (module) {

	var filter = function() {
		return {
			restrict: 'E',
			templateUrl: 'app/shared/filter/filter.html',
			link: function(scope, element, attrs) {
				scope.choosePage();
			}
		}
	};

	module.directive('filter', filter);

}(angular.module('app')));