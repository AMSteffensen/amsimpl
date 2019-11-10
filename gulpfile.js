const {
    src,
    dest,
    parallel
} = require('gulp');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');


function css() {
    return src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(dest('./dist'))
}

function js() {
    return src('src/js/*.js', {
            sourcemaps: true
        })
        .pipe(concat('amsimpl.min.js'))
        .pipe(dest('dist', {
            sourcemaps: true
        }))
}

exports.js = js;
exports.css = css;
exports.default = parallel(css, js);