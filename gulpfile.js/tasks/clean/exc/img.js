const { series, parallel } = require('gulp');
const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return parallel(
    series(
      getModule('del/html'),
      getModule('build/html'),
      getModule('build/pug'),
    ),
    series(
      getModule('del/css'),
      getModule('del/map'),
      getModule('build/css'),
      getModule('build/sass'),
    ),
    series(
      getModule('del/js'),
      getModule('build/js'),
    ),
  );
}