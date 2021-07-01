const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchHTML = () => {
  watch(
    conf.paths.html.src,
    series(
      getModule('build/html'),
    )
  );
}

exports.mod = watchHTML;