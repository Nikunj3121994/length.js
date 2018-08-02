const prompt = require('prompt');
const gulp = require('gulp');
require('../gulpfile');

prompt.message = '';

const schema = {
  properties: {
    'version_number': {
      pattern: /^(\d+).(\d+).(\d+)$/,
      message: 'Incorrect version number!',
      required: true,
    },
  },
};

prompt.start();

prompt.get(schema, function (err, result) {
  if (err) process.exit(-1);
  else {
    process.env.VERSION_NUMBER = result.version_number;
    gulp.task('bump')();
  }
});
