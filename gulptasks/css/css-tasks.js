const { src, dest } = require('gulp');
//const cssMin = require('gulp-css');
//const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

const PATHS = require('./../../paths.js');

function cssTask( done ) {
    return src( PATHS.css )
            .pipe(autoprefixer({
                browsers: ['last 4 versions'],
                cascade: false
              }))
            //.pipe(concat('app.css'))
            //.pipe(cssMin())
            .pipe(dest(PATHS.cssDist));
    done();
  }
  
  module.exports = cssTask;