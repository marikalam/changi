var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    //sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost'),
    browserSync = require('browser-sync').create();
    exec = require('child_process').exec;

//Run Flask server
gulp.task('runserver', ['styles'], function() {
    var proc = exec('python app.py');
});

// Add autoprefixer, browserSync
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
      //errLogToConsole: true,
    }))
    .pipe(postcss([
      lost(),
      autoprefixer()
    ]))
    //.pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./static/'))
    .pipe(browserSync.stream());
});

gulp.task('default',['serve']);

// Default task: Watch Files For Changes & Reload browser
gulp.task('default', ['runserver'], function () {
  browserSync.init({
    notify: false,
    proxy: "0.0.0.0:5000"
  });

  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch("templates/*.html").on('change', browserSync.reload);
});
