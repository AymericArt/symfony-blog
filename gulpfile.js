var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function () {
});

gulp.task('sass', function () {
    return gulp.src('assets/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('web/build/css/app.css'));
});