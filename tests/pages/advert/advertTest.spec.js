describe('app', function() {
	var scope,
		controller;

	beforeEach(module('app'));

	describe('advertCtrl', function() {
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('advertCtrl', {$scope: scope});
		}));

		describe('using methods of advertService', function () {
			var data = [{
				"id": 0,
				"type": "sale",
				"title": "LG G1",
				"desc": "LG G1 is a good device!",
				"pict": "..\/ui\/pic\/lgg1.jpg"
			}, {
				"id": 1,
				"type": "purchase",
				"title": "LG G2",
				"desc": "LG G2 is a good device!!!",
				"pict": "..\/ui\/pic\/lgg2.jpg"
			}];

			beforeEach(inject(function ($httpBackend) {
				$httpBackend.whenGET('app/pages/home/template/homeTemplate.html').respond(200);
				$httpBackend.whenGET('/advertisements').respond(200);
				$httpBackend.whenGET('/advertisements/1').respond(200, data[1]);
			}));

			it('should get an advert', inject(function (advertService, $httpBackend) {
				var itemNumber = 1;

				advertService.getAdvert(itemNumber).then(function(response) {
					scope.advert = response;
				});
				$httpBackend.flush();

				expect(scope.advert.id).toBe(data[itemNumber].id);
				expect(scope.advert.desc).toBe(data[itemNumber].desc);
			}));
		});
	});
});