const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const cssMin = () => {
  var done = '';
  var done2 = '';
  var expand = false;
  var compress = true;
  return getModule('build/css')(done, done2, expand, compress);
}

exports.mod = cssMin;