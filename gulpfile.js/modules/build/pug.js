const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const pug           = require('gulp-pug');
const cache         = require('gulp-cached');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildPug = () => {
  return src(conf.paths.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('pug'))
    .pipe(pug(conf.pug))
    .pipe(dest(conf.paths.pug.dest));
}

exports.mod = buildPug;