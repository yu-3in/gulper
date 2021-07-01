const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delImg = () => {
  return del([
    conf.paths.img.dest,
  ]);
}

exports.mod = delImg;