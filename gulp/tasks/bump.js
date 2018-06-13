const gulp            = require('gulp');
var { versionNumber } = require('../config');

gulp.task('bump', function (done) {
  // Check if version number provided by user matches X.X.X pattern.
  if (!versionNumber || versionNumber.split('.').length !== 3) {
    throw Error('\n\n    Incorrect version number. Use:\n    $ npm run bump -- 1.2.3\n    or\n    $ gulp bump --versionNumber 1.2.3\n');
  }
  return gulp.series(['stringReplacePackageJson',
    'stringReplacePackageLock',
    'stringReplaceLengthJs',
    'stringReplaceHeaderJs',
    'stringReplaceSrcLengthJs',
    'uglify'
  ])(done);
});
