//Directives

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
				};
			}
		}
	};

	var filter = function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/filter.html',
			link: function(scope, element, attrs) {
				scope.choosePage();
			}
		}
	};

	var item = function() {
		return {
			restrict: 'A',
			templateUrl: 'templates/item.html'
		}
	};

	module.directive('pagination', pagination);
	module.directive('filter', filter);
	module.directive('ngItem', item);

}(angular.module('app')));