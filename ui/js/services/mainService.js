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

	var advertService = function($resource) {
		var Adverts = $resource('/advertisements/:id', {
			id: "@id"
		}, {
			update: {
				method: 'PUT'
			}
		});

		return {
			queryAdverts: function() {
				return Adverts.query();
			},
			getAdvert: function(num) {
				return Adverts.get({id: num});
			},
			updateAdvert: function(item) {
				return Adverts.update({id: item.id}, item);
			}
		};
	};

	//module.factory("catService", catService);

	module.factory("advertService", advertService);

}(angular.module("app")));