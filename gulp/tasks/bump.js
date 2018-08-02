const gulp = require('gulp');

gulp.task('bump', function (done) {
  return gulp.series(['stringReplacePackageJson',
    'stringReplacePackageLock',
    'stringReplaceLengthJs',
    'stringReplaceHeaderJs',
    'stringReplaceSrcLengthJs',
    'uglify',
  ])(done);
});
