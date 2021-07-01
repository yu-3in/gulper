const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchSass = () => {
  watch(
    conf.paths.sass.src,
    series(
      getModule('build/sass')
    )
  );
}

exports.mod = watchSass;