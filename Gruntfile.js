//Gruntfile
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      dist: {
        src: ['lib/js/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
    },
    less: {
      development: {
        options: {
          compress: true
        },
        files: {
          "dist/css/<%= pkg.name %>.css":"lib/less/style.less"
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      frontend: {
        files: {
          'dist/js/<%= pkg.name %>.js': 'dist/js/<%= pkg.name %>.js'
        }
      }
    },
    watch: {
      html: {
        files: [
        'dist/*.html'
        ],   
        options: {
          livereload: true
        }
      },
      js_frontend: {
        files: [
        'lib/js/*.js'
        ],   
        tasks: ['concat','uglify'],
        options: {
          livereload: true
        }
      },
      less: {
        files: ['lib/less/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

};