module.exports = function(grunt) {

    // Initialize tasks
    grunt.initConfig({
        // All minified image files are saved in dist/ folder
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,gif,jpg,svg}'],
                    dest: 'dist/img/'
                },{
                    expand: true,
                    cwd: 'src/views/images/',
                    src: ['**/*.{png,gif,jpg,svg}'],
                    dest: 'dist/views/images/'
                }]
            }
        },
        // Check all js files for errors before uglify
        jshint: {
            all: ['src/js/*.js', 'src/views/js/*.js', 'Gruntfile.js']
        },
        // Watch all JS and CSS files for changes and check for errors automatically
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/views/js/*.js', 'Gruntfile.js', 'src/css/style.css', 'src/css/print.css', 'src/views/css/style.css'],
                tasks: ['jshint', 'uglify', 'cssmin'],
                options: {
                    spawn: false
                }
            }
        },
        // Minify css and save to dist/ folder
        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css' : ['src/css/style.css'],
                    'dist/css/print.min.css' : ['src/css/print.css'],
                    'dist/views/css/styles.min.css' : ['src/views/css/style.css'],
                    'dist/views/css/bootstrap-grid-min.css' : ['src/views/css/bootstrap-grid.css']
                }
            }
        },
        // Minify JS files
        uglify: {
            my_target: {
                files: {
                    'dist/js/perfmatters.min.js': ['src/js/perfmatters.js'],
                    'dist/views/js/main.min.js' : ['src/views/js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register all running tasks
    grunt.registerTask('default', ['imagemin','jshint', 'uglify', 'cssmin','watch']);

};
