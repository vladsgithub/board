(function(module) {
	var advertService = ['$resource', function($resource) {
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
			},
			addAdvert: function(item) {
				return Adverts.save(item);
			},
			deleteAdvert: function(index) {
				return Adverts.delete({id: index});
			}
		};
	}];

	module.factory("advertService", advertService);

}(angular.module("app")));