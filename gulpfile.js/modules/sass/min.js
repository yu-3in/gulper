const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const sassMin = () => {
  var done = '';
  var expand = false;
  var compress = true;
  var nest = false;
  var compact = false;
  return getModule('build/sass')(done, expand, compress, nest, compact);
}

exports.mod = sassMin;