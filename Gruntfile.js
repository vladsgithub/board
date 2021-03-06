module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			files: "ui/less/*.less",
			tasks: ["less"]
		},
		less: {
			development: {
				files: {
					'assets/css/app.css': 'ui/less/app.less'
				}
			}
		},
		concat: {
			dist: {
				src: [
					'node_modules/angular/angular.js',
					'node_modules/angular-ui-router/release/angular-ui-router.js',
					'node_modules/angular-resource/angular-resource.js',
					'app/*.js',
					'app/**/*.js'
				],
				dest: 'assets/js/production.js'
			}
		},
		uglify: {
			build: {
				src: 'assets/js/production.js',
				dest: 'assets/js/production.min.js'
			}
		}
		//imagemin: {
		//	dynamic: {
		//		files: [{
		//			expand: true,
		//			cwd: 'ui/pic/',
		//			src: ['*.{png,jpg,gif}'],
		//			dest: 'images/build/'
		//		}]
		//	}
		//}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('default', ['less', 'concat', 'uglify']); // 'watch', 'uglify'

};