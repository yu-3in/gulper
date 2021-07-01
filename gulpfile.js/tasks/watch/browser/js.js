const { series, parallel } = require('gulp');
const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return series(
    getModule('browser/init'),
    getModule('watch/reload/js'),
  );
}