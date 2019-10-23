const {
    src,
    dest,
    parallel
} = require('gulp');

const sass = require('gulp-sass')
const ts = require('gulp-typescript')

function html() {
    return src('*.html')
        .pipe(dest('build'))
}

function css() {
    return src('*.scss')
        .pipe(sass())
        .pipe(dest('build'))
}

function js() {
    var tsconfig = require("./tsconfig.json");
    return src(['*.ts', '5etools/*.ts'])
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(dest('build'))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);