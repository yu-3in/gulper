const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadFTP = () => {
  console.log(conf.fto.debounceDelay);
  watch(
    conf.paths.browser.dest,
    // {
    //   debounceDelay: conf.ftp.debounceDelay,
    // },
    series(
      series(
        getModule('ftp'),
        getModule('browser/reload'),
      )
    )
  );
}

exports.mod = watchReloadFTP;