module.exports = function(grunt) {

    grunt.initConfig({
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
        jshint: {
            all: ['src/js/*.js', 'src/views/js/*.js', 'Gruntfile.js']
        },
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/views/js/*.js', 'Gruntfile.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/views/css/style.css', 'src/views/css/bootstrap-grid.css'],
                dest: 'dist/views/css/styles.css'
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/style.min.css' : ['src/css/style.css']
                }
            }
        },
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['imagemin','jshint','concat', 'uglify', 'cssmin','watch']);

};
