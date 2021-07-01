const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const jsMin = () => {
  var done = '';
  var expand = false;
  var compress = true;
  return getModule('build/js')(done, expand, compress);
}

exports.mod = jsMin;