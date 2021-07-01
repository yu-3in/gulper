const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const sassExpand = () => {
  var done = '';
  var expand = true;
  var compress = false;
  var nest = false;
  var compact = false;
  return getModule('build/sass')(done, compress, nest, compact);
}

exports.mod = sassExpand;