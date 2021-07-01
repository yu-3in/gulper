const { src, dest } = require('gulp');
const plumber       = require('gulp-plumber');
const notify        = require('gulp-notify');
const rename        = require('gulp-rename');
const babel         = require('gulp-babel');
const uglify        = require('gulp-uglify');
const cache         = require('gulp-cached');
const sourcemaps    = require('gulp-sourcemaps');
const conf          = require(`${process.cwd()}/config/gulp.json`);

const buildJS = (done, expand = conf.js.outputStyle.expand, compress = conf.js.outputStyle.compress) => {
  var stream = src(conf.paths.js.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env'],
    }));
  // priority: expand > compress
  if (expand || !compress) { // expand
    const expandSuffix = conf.suffix.js.expand;
    const expandPath   = conf.paths.js.dest.expand;
    stream = stream
      .pipe(
        rename({
          suffix: expandSuffix,
        })
      )
      .pipe(dest(expandPath));
  }

  if (compress) { // compress
    const compressSuffix = conf.suffix.js.compress;
    const compressPath   = conf.paths.js.dest.compress;
    const hasMap         = conf.map.js;
    stream = stream
      .pipe(uglify())
      .pipe(
        rename({
          suffix: compressSuffix,
        }),
      );
    if (hasMap) {
      stream = stream
        .pipe(sourcemaps.write(conf.sourcemaps.js))
    }
    stream = stream
      .pipe(dest(compressPath));
  }
  return stream;
}

exports.mod = buildJS;