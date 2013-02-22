module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: ["publish"],

    copy: {
      dist: {
        files: {
          "publish/icon-128.png": "icon-128.png",
          "publish/icon-16.png": "icon-16.png",
          "publish/icon-48.png": "icon-48.png",
          "publish/manifest.json": "manifest.json",
          "publish/script.js": "script.js"
        }
      }
    },

    compress: {
      main: {
        options: {
          archive: 'github-gemnasium-chrome-extension.zip'
        },
        files: [
          { src: ['publish/*'], dest: '/', filter: 'isFile'}
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['clean', 'copy', 'compress']);

};