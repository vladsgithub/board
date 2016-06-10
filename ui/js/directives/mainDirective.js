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
			//templateUrl: 'templates/item.html'
			template:
			'<div class="ad animated fadeIn">' +
				'<a href type="button" class="btn-del" ng-click="deleteItem(advert.id)"><i class="icon-remove-circle"></i></a>' +
				'<dl class="info"><dt>{{advert.type}}:</dt><dd>{{advert.title}}</dd></dl>' +
				'<div class="pict-block">' +
					'<p>{{advert.id}}</p>' +
					'<a class="picture" ui-sref="advert({number: advert.id})"><img ng-src="{{advert.pict}}"></a>' +
				'</div>' +
			'</div>'
		}
	};

	module.directive('pagination', pagination);
	module.directive('filter', filter);
	module.directive('ngItem', item);

}(angular.module('app')));