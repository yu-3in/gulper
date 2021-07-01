const arg = process.argv[2] ?? 'default';
const argPath = arg.replace(/:/g, '/');

try {
  var path = `${process.cwd()}/gulpfile.js/tasks/${argPath}`;
  var { task } = require(path);
  exports[arg] = task();
} catch (e) {
  ;
  try { // Go find the index file
    var pathIndex = `${path}/index`;
    var { task } = require(pathIndex);
    exports[arg] = task();
  } catch (e) { // Task not found
    const { getFormattedDate } = require('./lib/getFormattedDate');
    console.error(`[\x1b[1m\x1b[30m${getFormattedDate()}\x1b[0m] \x1b[31mCannot find task '${arg}' in '${path}' and '${pathIndex}' or an error occurred\x1b[0m`);
    return;
  }
}