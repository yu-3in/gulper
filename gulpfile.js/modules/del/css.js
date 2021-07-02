const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delCSS = () => {
  return del(conf.paths.css.del);
}

exports.mod = delCSS;