const { series, parallel } = require('gulp'); const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return parallel(
    series(
      getModule('build/html'),
      getModule('build/ejs'),
      getModule('build/pug'),
    ),
    series(
      getModule('build/css'),
      getModule('build/sass'),
    ),
    getModule('build/js'),
    getModule('build/img'),
  );
}