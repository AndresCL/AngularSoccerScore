// Load plugins
var gulp = require('gulp');

// Copying IMAGES
gulp.task('images', function() {
  return gulp.src(['app/components/*/*.{png,jpg,jpeg,gif}'], {base: 'app'})
    .pipe(gulp.dest('dist'));
});

// Copying HTML
gulp.task('html', function() {
  return gulp.src(['app/components/*/*.html'], {base: 'app'})
    .pipe(gulp.dest('dist'));
});

// Run all
gulp.task('default', ['html', 'images']);