const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchPug = () => {
  watch(
    conf.paths.pug.src,
    series(
      getModule('build/pug')
    )
  );
}

exports.mod = watchPug;