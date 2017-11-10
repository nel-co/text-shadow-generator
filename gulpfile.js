const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const cleancss = require('gulp-clean-css');
const combineMq = require('gulp-combine-mq');
const concat = require('gulp-concat');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// Styles
gulp.task('styles', function () {
  return gulp.src(['src/styles/sass/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
    }))
    .pipe(combineMq({
      beautify: false,
    }))
    .pipe(cleancss())
    .pipe(concat('index.css'))
    .pipe(gulp.dest('build/styles'))
    .pipe(browserSync.stream());
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src(['src/js/*.js'])
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.stream());
});

gulp.task('html', function () {
  return gulp.src('build/*.html')
    .pipe(browserSync.stream());
});

// Default task
gulp.task('default', [], function () {
  gulp.start('styles', 'scripts');
});

// Watch
gulp.task('watch', function () {
  // Static server
  browserSync.init({
    server: {
      baseDir: 'build/',
    },
  });
  // Watch .html files
  gulp.watch('build/*.html', ['html']);
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);
});
