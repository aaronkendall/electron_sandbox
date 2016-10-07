const gulp = require('gulp');
// js
const rollup = require('rollup-stream');
const npm = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const jade = require('gulp-jade');

function buildJS() {
    return rollup({
            entry: './src/js/index.js',
            format: 'iife',
            plugins: [
                npm({ jsnext: true, main: true }),
                babel({ exclude: 'node_modules/**'})
            ]
        })
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist'));
}

function buildCSS() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}

function buildHTML() {
    return gulp.src('./src/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
}

gulp.task('js', buildJS);
gulp.task('css', buildCSS);
gulp.task('html', buildHTML);

gulp.task('build', ['js', 'css', 'html']);
gulp.task('default', ['build']);
