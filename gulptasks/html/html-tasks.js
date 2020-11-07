const { src, dest } = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();
const data = require('gulp-data');

const PATHS = require('../../paths.js');

function htmlTask ( done ) {
    return src(PATHS.templates)
        .pipe(data(function() {
            return require(PATHS.data)
        }))
        .pipe(nunjucksRender({
            path: PATHS.templatesAlias
        }))
        .pipe(dest(PATHS.htmlDist))
        .pipe(browserSync.stream());
    done();
}

module.exports = htmlTask;