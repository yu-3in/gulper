const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchFTP = () => {
  watch(
    conf.paths.browser.dest,
    // {
    //   debounceDelay: conf.ftp.debounceDelay,
    // },
    series(
      getModule('ftp')
    )

  );
}

exports.mod = watchFTP;