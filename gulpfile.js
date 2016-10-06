const gulp = require('gulp');
// js
const rollup = require('rollup-stream');
const npm = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const source = require('vinyl-source-stream');

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

gulp.task('js', buildJS);
