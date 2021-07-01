const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchCSS = () => {
  watch(
    conf.paths.css.src,
    series(
      getModule('build/css')
    )
  );
}

exports.mod = watchCSS;