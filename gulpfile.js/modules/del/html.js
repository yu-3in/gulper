const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delHTML = () => {
  return del([
    conf.paths.html.dest,
    conf.paths.pug.dest,
    conf.paths.ejs.dest,
  ]);
}

exports.mod = delHTML;