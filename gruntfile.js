//Exemplo uso do grunt
module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    '_js/scripts.js': ['js/controllers/previsaoController.js',
                        'js/directives/uiAlertDirective.js',
                        'js/filter/cidadeEstadoFilter.js',
                        'js/config/configValue.js',
                          'js/filter/nameFilter.js',
                        'js/services/previsaoApi.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '/css/style.css': 'css/index.saas'
                }
            }
        },
        watch: {
            dist: {
                files: [
                    'assets/_js/**/*',
                    'assets/_sass/**/*'
                ],

                tasks: ['uglify', 'sass']
            }
        }
    });

    // Plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');



    // Tarefas que serão executadas
    grunt.registerTask('default', ['uglify', 'sass']);

    // Tarefa para Watch
    grunt.registerTask('w', ['watch']);

};
uglify ');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');



// Tarefas que serão executadas
grunt.registerTask('default', ['uglify', 'sass']);

// Tarefa para Watch
grunt.registerTask('w', ['watch']);

};
