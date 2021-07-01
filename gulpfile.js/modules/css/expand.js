const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const cssExpand = () => {
  var done = '';
  var done2 = '';
  var expand = true;
  var compress = false;
  return getModule('build/css')(done, done2, expand, compress);
}

exports.mod = cssExpand;