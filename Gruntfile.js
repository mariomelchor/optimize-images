module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    imagemin: {
      png: {
        options: {
          optimizationLevel: 5
        },
        files: [{
          expand: true,
          cwd: 'original/',
          src: ['**/*.png'],
          dest: 'optimized/'
        }]
      },
      jpg: {
        options: {
          optimizationLevel: 5,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'original/',
          src: ['**/*.jpg'],
          dest: 'optimized/',
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('imagejpg', ['imagemin:jpg']); // only .jpg files
  grunt.registerTask('imagepng', ['imagemin:png']); // only .png files
  grunt.registerTask('default', ['imagemin']);

};