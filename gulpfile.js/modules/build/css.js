const { src, dest }  = require('gulp');
const plumber        = require('gulp-plumber');
const notify         = require('gulp-notify');
const rename         = require('gulp-rename');
const postcss        = require('gulp-postcss');
const cleanCSS       = require('gulp-clean-css');
const cssDeclSort    = require('css-declaration-sorter');
const autoprefixer   = require('autoprefixer');
const mqpacker       = require('css-mqpacker');
const cache          = require('gulp-cached');
const conf           = require(`${process.cwd()}/config/gulp.json`);

const cssOutputStyle = conf.css.outputStyle;

const buildCSS = (done, done2, expand = cssOutputStyle.expand, compress = cssOutputStyle.compress) => {
  var stream = src(conf.paths.css.src, {
    sourcemaps: true,
  })
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('css'))
    .pipe(postcss([
      mqpacker(),
      cssDeclSort({
        order: conf.propertySort,
      }),
      autoprefixer(), // autoprefixer options are in "package.json".
    ]))

  // expandとcompressの両方がfalseだった場合はexpandのみ（デフォルト）
  // expand
  if (expand || !compress) {
    const expandSuffix = conf.suffix.css.expand;
    const expandPath   = conf.paths.css.dest.expand;
    stream = stream
      .pipe(
        rename({
          suffix: expandSuffix,
        }),
      )
      .pipe(dest(expandPath));
  }
  // compress
  if (compress) {
    const compressSuffix = conf.suffix.css.compress;
    const compressPath   = conf.paths.css.dest.compress;
    const hasMap         = conf.map.css;
    const sourcemaps     = conf.sourcemaps.css;
    stream = stream
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: compressSuffix,
        }),
      );
    if (hasMap) {
      stream = stream
        .pipe(dest(compressPath), {
          sourcemaps: sourcemaps,
        });
    } else {
      stream = stream
        .pipe(dest(compressPath));
    }
  }
  return stream;
}

exports.mod = buildCSS;