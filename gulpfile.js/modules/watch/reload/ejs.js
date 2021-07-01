const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadEJS = () => {
  watch(
    conf.paths.ejs.src,
    series(
      getModule('build/ejs'),
      getModule('browser/reload'),
    )
  );
}

exports.mod = watchReloadEJS;