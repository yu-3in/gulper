const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delCSS = () => {
  return del([
    conf.paths.sass.dest.expand,
    conf.paths.sass.dest.compress,
    conf.paths.sass.dest.nest,
    conf.paths.sass.dest.compact,
    conf.paths.css.dest.expand,
    conf.paths.css.dest.compress,
  ]);
}

exports.mod = delCSS;