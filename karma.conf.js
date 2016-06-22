module.exports = function(config) {
	config.set({
		basePath: '',
		autoWatch: true,
		//singleRun: true,
		//browsers: ['Chrome'],
		browsers: ['PhantomJS'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-resource/angular-resource.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'app/*.js',
			'app/**/*.js',
			'app/**/*.html'

			//'assets/js/production.js',
		],
		preprocessors: {
			'app/shared/**/*.html': 'ng-html2js'
		},
		frameworks: ["jasmine"],
		reporters: ["progress"],
		plugins : [
			'karma-phantomjs-launcher',
			//'karma-chrome-launcher',
			'karma-jasmine',
			'karma-ng-html2js-preprocessor'
		]
	});
};