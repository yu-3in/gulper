const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const sassCompact = () => {
  var done = '';
  var expand = false;
  var compress = false;
  var nest = false;
  var compact = true;
  return getModule('build/sass')(done, expand, compress, nest, compact);
}

exports.mod = sassCompact;