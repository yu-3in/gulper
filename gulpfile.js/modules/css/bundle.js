const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const del = require('del');
const currentPath = process.cwd();
// const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);
const conf = require(`${process.cwd()}/config/gulp.json`);

const bundleCSS = (done) => {
  // series
  src(conf.css.bundle.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(concat(conf.css.bundle.name))
    .pipe(dest(conf.css.bundle.dest));
  // setTimeout(() => {
  //   del([
  //     conf.css.bundle.dest,
  //   ]);
  //   setTimeout(() => {
  //     src(conf.css.bundle.dest + conf.css.bundle.name)
  //       .pipe(dest(conf.css.bundle.dest));
  //     setTimeout(() => {
  //       del([
  //         conf.css.bundle.dest + conf.css.bundle.name,
  //       ])
  //     }, 100);
  //   }, 100);
  // }, 500);

  done();
}

exports.mod = bundleCSS;