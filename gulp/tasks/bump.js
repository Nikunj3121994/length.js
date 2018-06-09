const gulp = require('gulp');
const runSequence = require('run-sequence');
var { versionNumber } = require('../config');

gulp.task('bump', function () {
  if (!versionNumber || versionNumber.split('.').length !== 3) {
    throw Error('\n\n    Incorrect version number. Use:\n    $ npm run bump -- 1.2.3\n    or\n    $ gulp bump --versionNumber 1.2.3\n');
  }
  return runSequence(
    'stringReplacePackageJson',
    'stringReplacePackageLock',
    'stringReplaceLengthJs',
    'stringReplaceHeaderJs',
    'stringReplaceSrcLengthJs',
    'uglify'
  );
});
