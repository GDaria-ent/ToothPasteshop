const gulpCopy = require('gulp-copy');
const { src, dest } = require('gulp');

const PATHS = require('../../paths.js');

function copyTask ( done )  {
    return src(PATHS.copy.source)
            .pipe(gulpCopy(PATHS.copy.dest,{}))
            .pipe(dest(PATHS.copy.dest))
    done();
}

module.exports = copyTask;