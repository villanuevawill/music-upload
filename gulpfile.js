var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat');


// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'})
    .on('restart', function () {
      refresh(client);
    });
});

gulp.task('scripts', function() {
  return gulp.src('./client/public/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./client/dist/'));
});

gulp.task('default', ['scripts', 'serve'])