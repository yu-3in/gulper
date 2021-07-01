const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const imagemin      = require('gulp-imagemin');
const pngquant      = require('imagemin-pngquant');
const mozjpeg       = require('imagemin-mozjpeg');
const changed       = require('gulp-changed');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildImg = () => {
  return src(conf.paths.img.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(changed(conf.paths.img.dest))
    .pipe(imagemin([
      pngquant({
        quality: [
          conf.imagemin.pngquant.quality.min,
          conf.imagemin.pngquant.quality.max
        ],
      }),
      mozjpeg({
        quality: conf.imagemin.pngquant.mozjpeg.quality,
      }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle(),
    ]))
    .pipe(dest(conf.paths.img.dest));
};

exports.mod = buildImg;