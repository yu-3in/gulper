const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchJS = () => {
  watch(
    conf.paths.js.src,
    series(
      getModule('build/js')
    )
  );
}

exports.mod = watchJS;