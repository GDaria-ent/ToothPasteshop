const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssbeautify = require('gulp-cssbeautify');
const gcmq = require('gulp-group-css-media-queries');
const browserSync = require('browser-sync').create();

const PATHS = require('./../../paths.js');

function sassTask ( done ) {
    return src( PATHS.sass )
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))    
            .pipe(autoprefixer({
              overrideBrowserslist: ['last 2 versions'],
                cascade: false
              }))
            .pipe(sourcemaps.write())
            .pipe(cssbeautify())
            .pipe(gcmq())
            .pipe(dest(PATHS.cssDist))
            .pipe(browserSync.stream());
    done();
}


module.exports = sassTask;