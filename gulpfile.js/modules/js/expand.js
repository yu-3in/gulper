const { getModule } = require(`${process.cwd()}/gulpfile.js/lib/getModule`);

const jsExpand = () => {
  var done = '';
  var expand = true;
  var compress = false;
  return getModule('build/js')(done, expand, compress);
}

exports.mod = jsExpand;