const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadHTML = () => {
  return watch(
    conf.paths.html.src,
    series(
      getModule('build/html'),
      getModule('browser/reload'),
    )
  );
}

exports.mod = watchReloadHTML;