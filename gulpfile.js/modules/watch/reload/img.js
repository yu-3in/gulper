const { series, parallel } = require('gulp'); const watch = require('gulp-watch');
const conf = require(`${process.cwd()}/config/gulp.json`);
const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const watchReloadImg = () => {
  watch(
    conf.paths.img.src,
    series(
      getModule('build/img'),
      getModule('browser/reload')
    )
  );
}

exports.mod = watchReloadImg;