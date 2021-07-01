const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const del = require('del');
const currentPath = process.cwd();
// const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);
const conf = require(`${process.cwd()}/config/gulp.json`);

const bundleJS = (done) => {
  // series
  src(conf.js.bundle.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(concat(conf.js.bundle.name))
    .pipe(dest(conf.js.bundle.dest + "/../"));
  setTimeout(() => {
    del([
      conf.js.bundle.dest,
    ]);
    setTimeout(() => {
      src(conf.js.bundle.dest + '/../' + conf.js.bundle.name)
        .pipe(dest(conf.js.bundle.dest));
      setTimeout(() => {
        del([
          conf.js.bundle.dest + "/../" + conf.js.bundle.name,
        ])
      }, 100);
    }, 100);
  }, 500);

  done();
}

exports.mod = bundleJS;