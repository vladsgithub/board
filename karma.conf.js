module.exports = function(config) {
	config.set({
		autoWatch: true,
		//browsers: ['Chrome'],
		browsers: ['PhantomJS'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'ui/js/*.js',
			'ui/js/*/*.js',
			//'assets/js/production.js',
			'test/tests.js'
		],
		frameworks: ["jasmine"],
		reporters: ["progress"],
		plugins : [
			'karma-phantomjs-launcher',
			//'karma-chrome-launcher',
			'karma-jasmine'
		]
	});
};