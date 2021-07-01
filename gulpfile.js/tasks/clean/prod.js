const { series, parallel } = require('gulp');
const currentPath = process.cwd();
const { getTask } = require(`${currentPath}/gulpfile.js/lib/getTask`);
const { getModule } = require(`${currentPath}/gulpfile.js/lib/getModule`);

exports.task = () => {
  return series(
    getTask('del'),
    parallel(
      series(
        getModule('build/html'),
        getModule('build/pug'),
      ),
      series(
        getModule('css/min'),
        getModule('sass/min'),
      ),
      getModule('js/min'),
      getModule('build/img'),
    ),
    getModule('del/map'),
  );
}