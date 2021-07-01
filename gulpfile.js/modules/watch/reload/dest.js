const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadDest = () => {
  watch(
    conf.paths.browser.dest,
    series(
      getModule('browser/reload')
    )
  );
}

exports.mod = watchReloadDest;