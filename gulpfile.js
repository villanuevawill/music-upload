var gulp = require('gulp'),
    nodemon   = require('gulp-nodemon');

// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'})
    .on('restart', function () {
      refresh(client);
    });
});

gulp.task('default', ['serve'])