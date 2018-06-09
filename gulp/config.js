const argumentsList = (argList => {
  let arg = {}, argument, argumentWithoutDashes, isValue;

  for (let i = 0; i < argList.length; i++) {

    // Trim argument.
    argument = argList[i].trim();
    // Remove -- from argument.
    argumentWithoutDashes = argument.replace(/^\-+/, '');

    // If you run Node command with e.g. `--foo bar` it will be presented in process.argv array
    // as [ '--foo', 'bar' ]. So, if argument is equal to argument without -- it means one of two things:
    // - argument is not passed by user
    // - argument is value of previous argument.
    if (argumentWithoutDashes === argument) {
      // If argument is value of previous argument save it as value in `arg` object.
      if (isValue) {
        arg[isValue] = argumentWithoutDashes;
      }
      isValue = false;
    }
    // If argument is not equal to argument without -- it means that was passed by user
    // and next argument will be value of that argument.
    else {
      // Add argument to `isValue` variable and to `arg` object.
      isValue = argumentWithoutDashes;
      arg[isValue] = true;
    }
  }

  // Return `arg` object.
  return arg;
})(process.argv);

module.exports = {
  versionNumber: argumentsList.versionNumber,
};
