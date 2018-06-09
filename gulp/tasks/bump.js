const gulp            = require('gulp');
const runSequence     = require('run-sequence');
var { versionNumber } = require('../config');

gulp.task('bump', function () {
  // Check if version number provided by user matches X.X.X pattern.
  if (!versionNumber || versionNumber.split('.').length !== 3) {
    throw Error('\n\n    Incorrect version number. Use:\n    $ npm run bump -- 1.2.3\n    or\n    $ gulp bump --versionNumber 1.2.3\n');
  }
  // If version number is correct change version number in files and generate minified version.
  return runSequence(
    'stringReplacePackageJson',
    'stringReplacePackageLock',
    'stringReplaceLengthJs',
    'stringReplaceHeaderJs',
    'stringReplaceSrcLengthJs',
    'uglify'
  );
});
