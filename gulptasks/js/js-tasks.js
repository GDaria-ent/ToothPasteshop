const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const rigger = require('gulp-rigger');

const PATHS = require('./../../paths.js');

function jsTask(done) {
  return src( PATHS.js )
        .pipe(rigger())
        .pipe(dest(PATHS.jsDist))
        .pipe(browserSync.stream());
    done();
  }
  
  module.exports = jsTask;