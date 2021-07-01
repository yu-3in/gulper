const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const sitemap       = require('gulp-sitemap');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildSitemap = () => {
  return src(conf.paths.html.src, {
    read: false,
  })
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(sitemap({
      siteUrl: conf.paths.siteUrl,
    }))
    .pipe(dest(conf.paths.html.dest));
}

exports.mod = buildSitemap;