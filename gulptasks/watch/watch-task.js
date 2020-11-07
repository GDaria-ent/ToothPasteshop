const { watch, series, task } = require('gulp');

const browserSync = require('browser-sync').create();

const cssTask = require('./../css/css-tasks.js');

const jsTask = require('./../js/js-tasks.js');

const sassTask = require('./../sass/sass-tasks.js');

const htmlTask = require('./../html/html-tasks.js');


const PATHS = require('../../paths.js');

const distWatcher = watch(PATHS.commonDist);

const htmlWatcher = watch(PATHS.html);

const commonTemplates = watch(PATHS.commonTemplates);



function watchTask ( done ) {

    browserSync.init({
        server: {
            baseDir: ['./', './dist']
        },
        ui: {
            port: 8181
        },
        host: '192.168.88.11',
        //tunnel: true
    });

    distWatcher.on('change', function () {
        browserSync.reload();
        done();
    });

   watch(PATHS.sass, series(sassTask));

   watch(PATHS.js, series(jsTask));

   watch(PATHS.templates, series(htmlTask));

    htmlWatcher.on('change', function () {
        browserSync.reload();
        done();
    });

    commonTemplates.on('change', function () {
        browserSync.reload();
        done();
    });

    done();
}



module.exports = watchTask;