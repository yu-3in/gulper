const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const cache         = require('gulp-cached');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildHTML = () => {
  return src(conf.paths.html.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('html'))
    .pipe(dest(conf.paths.html.dest));
}

exports.mod = buildHTML;