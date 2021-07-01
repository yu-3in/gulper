const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delMap = () => {
  return del(conf.paths.delMap);
}

exports.mod = delMap;