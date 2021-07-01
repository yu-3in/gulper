const { series, parallel } = require('gulp'); const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return series(
    getModule('browser/init'),
    parallel(
      getModule('watch/reload/html'),
      getModule('watch/reload/pug'),
      getModule('watch/reload/sass'),
      getModule('watch/reload/css'),
      getModule('watch/reload/js'),
      getModule('watch/reload/img'),
      getModule('watch/reload/ftp'),
    )
  );
}