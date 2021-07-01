const { src, dest }   = require('gulp');
const plumber         = require('gulp-plumber');
const notify          = require('gulp-notify');
const rename          = require('gulp-rename');
const postcss         = require('gulp-postcss');
const cleanCSS        = require('gulp-clean-css');
const sass            = require('gulp-sass');
const sassGlob        = require('gulp-sass-glob');
const cssDeclSort     = require('css-declaration-sorter');
const autoprefixer    = require('autoprefixer');
const mqpacker        = require('css-mqpacker');
const cache           = require('gulp-cached');
const sourcemaps      = require('gulp-sourcemaps');
const conf            = require(`${process.cwd()}/config/gulp.json`);

const sassOutputStyle = conf.sass.outputStyle;
const hasMap          = conf.map.sass;

const buildSass = (done, expand = sassOutputStyle.expand, compress = sassOutputStyle.compress, nest = sassOutputStyle.nest, compact = sassOutputStyle.compact) => {
  var outputStyle;
  var stream;
  // priority: expand => compress > nest > compact
  // If only compress, there is nothing in outputStyle.
  if (nest && !expand) {
    outputStyle = ['nested', 'nest'];
  }
  if (compact && !expand && !nest) {
    outputStyle = ['compact', 'compact'];
  }
  if (expand || (!compress && !nest && !compact)) {
    outputStyle = ['expanded', 'expand'];
  }

  var onlyCompress = !outputStyle && compress;

  stream = src(conf.paths.sass.src)
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>'),
    }))
    .pipe(cache('sass'))
    .pipe(sourcemaps.init())
    .pipe(sassGlob());
  if (onlyCompress) {
    stream = stream
      .pipe(sass({
        outputStyle: 'compressed',
      }))
  } else {
    stream = stream
      .pipe(sass({
        outputStyle: outputStyle[0],
      }))
  }
  stream = stream
    .pipe(postcss([
      mqpacker(),
      cssDeclSort({
        order: conf.propertySort,
      }),
      autoprefixer(), // autoprefixer options are in "package.json".
    ]))

  if(onlyCompress) {
    stream = stream
      .pipe(
        rename({
          suffix: conf.suffix.sass.compress,
        })
      );
    if (hasMap) {
      stream = stream
        .pipe(sourcemaps.write(conf.sourcemaps.sass));
    }
    stream = stream
      .pipe(dest(conf.paths.sass.dest.compress));
  } else {
    stream = stream
    .pipe(
      rename({
        suffix: conf.suffix.sass[outputStyle[0]],
      }),
    )
      .pipe(dest(conf.paths.sass.dest[outputStyle[1]]));
  }

  // and compress
  if (outputStyle && compress) {
    stream = stream
      .pipe(cleanCSS())
      .pipe(
        rename({
          suffix: conf.suffix.sass.compress,
        }),
      );
    if (hasMap) {
      stream = stream
        .pipe(sourcemaps.write(conf.sourcemaps.sass))
    }
    stream = stream
    .pipe(dest(conf.paths.sass.dest.compress));

  }

  return stream;
}

exports.mod = buildSass;