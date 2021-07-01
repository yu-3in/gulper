const browserSync = require('browser-sync');
const conf        = require(`${process.cwd()}/config/gulp.json`);

const browserInit = (done) => {
  browserSync.init({
    port: conf.browser.port,
    reloadThrottle: conf.browser.reloadThrottle,
    server: {
      baseDir: conf.paths.root,
      index: conf.paths.html.index,
    },
    reloadOnRestart: conf.browser.reloadOnRestart,
  });
  done();
}
exports.mod = browserInit;