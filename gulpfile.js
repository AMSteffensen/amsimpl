var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('compress', function () {
    return pipeline(
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    );
});