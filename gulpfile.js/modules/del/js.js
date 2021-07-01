const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delJS = (done) => {
  del([
    conf.paths.js.dest.expand,
    conf.paths.js.dest.compress,
  ]);
  done();
}

exports.mod = delJS;