const { series, parallel } = require('gulp');
const currentPath = process.cwd();
// const { getTask }          = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return parallel(
    getModule('watch/html'),
    getModule('watch/pug'),
    getModule('watch/ejs'),
    getModule('watch/sass'),
    getModule('watch/css'),
    getModule('watch/js'),
    getModule('watch/img'),
  );
}