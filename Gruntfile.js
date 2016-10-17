module.exports = function (grunt) {

    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'src/css/tna-base.css': 'src/css/sass/tna-base.scss',
                    'styles/prototype-overrides.css': 'src/css/sass/prototype-overrides.scss',
                    'styles/prototype-styles.css': 'src/css/sass/prototype-styles.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/css/sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};