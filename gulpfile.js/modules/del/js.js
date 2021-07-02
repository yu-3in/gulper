const del  = require('del');
const conf = require(`${process.cwd()}/config/gulp.json`);

const delJS = (done) => {
  del(conf.paths.js.del);
  done();
}

exports.mod = delJS;