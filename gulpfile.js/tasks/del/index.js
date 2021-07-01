const { series, parallel } = require('gulp');
const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return parallel(
    getModule('del/html'),
    getModule('del/css'),
    getModule('del/js'),
    getModule('del/img'),
    getModule('del/map'),
  );
}