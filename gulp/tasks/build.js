const gulp   = require('gulp');
const rollup = require('rollup').rollup;
const fs     = require('fs');

gulp.task('build', function() {
  const rollupOpts = {
    // Entry file.
    input: './src/length.js',
  };
  
  const bundleOpts = {
    format: 'umd',
    // Name of generated bundle/library.
    name: 'length'
  };

  return (
    // Create a bundle.
    rollup(rollupOpts)
      // Generate code.
      .then(bundle => bundle.generate(bundleOpts))
      .then(function (result) {
        // Get generated code (as plain text).
        const generatedCode = result.code;

        // Open 'header.js' file.
        fs.readFile('./templates/header.js', 'utf8', (err, data) => {
          if (err) throw err;
          // Replace first 5 lines of generated code with 'header.js' contents.
          const fixed = data + generatedCode.split('\n').slice(5).join('\n');

          // Save fixed code.
          fs.writeFile('./length.js', fixed, (err) => {
            if (err) throw err;
            console.log("\x1b[1m\x1b[32m", '\n    length.js generated correctly!\n');
          });
        });
      })
  );
});
