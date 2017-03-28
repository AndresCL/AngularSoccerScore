// Load plugins
var gulp = require('gulp');

// Copying HTML
gulp.task('default', function() {
  return gulp.src(['app/components/*/*.html'], {base: 'app'})
    .pipe(gulp.dest('dist'));
});