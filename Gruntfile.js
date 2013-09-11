module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		compass: {
			options: {
				sassDir: 'scss',
				cssDir: 'css',
				imagesDir: '',
				javascriptsDir: 'js',
				relativeAssets: true
			},

			dev: {
				options: {
					outputStyle: 'expanded'
				}
			},

			build: {
				options: {
					outputStyle: 'compressed',
					force: true
				}
			}
		},

		watch: {
			sass: {
				files: ['scss/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: 35729
				}
			}
		}

	});
};