const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadCSS = () => {
  watch(
    conf.paths.css.src,
    series(
      getModule('build/css'),
      getModule('browser/reload')
    )
  );
}

exports.mod = watchReloadCSS;