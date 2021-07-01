const getTask = (taskPath) => {
  try {
    var path = `${process.cwd()}/gulpfile.js/tasks/${taskPath}`;
    var task = require(`${process.cwd()}/gulpfile.js/tasks/${taskPath}`)['task'];
  } catch (e) {
    try {
      var path2 = `${path}/index`;
      var task = require(path)['task'];
    } catch {
      const { getFormattedDate } = require('./getFormattedDate');
      console.error(`[\x1b[1m\x1b[30m${getFormattedDate()}\x1b[0m] \x1b[31mCannot find task '${modulePath}' in '${path}' and '${path2}'\x1b[0m`);
    }
  }
  return task();
}

exports.getTask = getTask;