const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const ejs           = require('gulp-ejs');
const rename        = require('gulp-rename');
const replace       = require('gulp-replace');
const cache         = require('gulp-cached');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildEJS = () => {
  return src(conf.paths.ejs.srcBuild)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('ejs'))
    .pipe(ejs({}, {}, {
          ext: conf.ejs.ext
    }))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
    .pipe(
      rename({
        extname: conf.suffix.ejs,
      }),
    )
    .pipe(dest(conf.paths.ejs.dest));
}

exports.mod = buildEJS;