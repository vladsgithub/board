(function (module) {

	var pagination = function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/pagination.html',
			link: function(scope, element, attrs) {
				scope.activeItem = 0;

				scope.selectPage = function(index) {
					if (index < 0 || index >= scope.pageNumArray.length) return false;

					scope.choosePage(index);
					scope.activeItem = index;
				};
			}
		}
	};

	module.directive('pagination', pagination);

}(angular.module('app')));