const { series, task, parallel } = require('gulp');

let cssTask = require('./gulptasks/css/css-tasks.js');
const copyTask = require('./gulptasks/copy/copy-task.js');
const jsTask = require('./gulptasks/js/js-tasks.js');
const sassTask = require('./gulptasks/sass/sass-tasks.js');
const watchTask = require('./gulptasks/watch/watch-task.js');
const htmlTask = require('./gulptasks/html/html-tasks.js');




task('dev', 
    series( 
        parallel(copyTask, sassTask, jsTask, htmlTask),
        watchTask
    )
);

task('build', series(
    copyTask,
    sassTask, 
    parallel(jsTask, htmlTask),
    watchTask
));

