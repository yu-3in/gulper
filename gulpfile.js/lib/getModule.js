const getModule = (modulePath) => {
  try {
    var path = `${process.cwd()}/gulpfile.js/modules/${modulePath}`;
    var mod = require(`${process.cwd()}/gulpfile.js/modules/${modulePath}`)['mod'];
  } catch (e) {
    try {
      var path2 = `${path}/index`;
      var mod = require(path)['mod'];

    } catch {
      const { getFormattedDate } = require('./getFormattedDate');
      console.error(`[\x1b[1m\x1b[30m${getFormattedDate()}\x1b[0m] \x1b[31mCannot find module '${modulePath}' in '${path}' and '${path2}'\x1b[0m`);
    }
  }
  return mod;
}

exports.getModule = getModule;