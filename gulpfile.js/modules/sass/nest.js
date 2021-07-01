const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const sassNest = () => {
  var done = '';
  var expand = false;
  var compress = false;
  var nest = true;
  var compact = false;
  return getModule('build/sass')(done, expand, compress, nest, compact);
}

exports.mod = sassNest;