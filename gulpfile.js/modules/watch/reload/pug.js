const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadPug = () => {
  watch(
    conf.paths.pug.src,
    series(
      getModule('build/pug'),
      getModule('browser/reload')
    )
  );
}

exports.mod = watchReloadPug;