(function(module) {

	//var catService = function($resource) {
	//	var Cat = $resource('/cat/:id');
	//
	//	return {
	//		cat: Cat,
	//		queryCat: function() {
	//			return Cat.query();
	//		},
	//		saveCat: function(cat) {
	//			return Cat.save(cat);
	//
	//			// it is another way:
	//			//newCat = new Cat(cat);
	//			//newCat.$save();
	//		}
	//	}
	//};

	var advertService = function($resource, $timeout) {
		//var Adverts = $resource('json/adverts.json');
		var Adverts = $resource('/advertisements');

		return {
			queryAdverts: function() {
				return Adverts;
			}
		};
	};

	//module.factory("catService", catService);

	module.factory("advertService", advertService);

}(angular.module("app")));