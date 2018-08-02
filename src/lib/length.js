import { validate } from './validate';

// Length constructor
function Length(value, unit) {
  validate(value, unit);

  this.value = value;
  this.unit = unit;
}

/**
 * Main function (available by global.length) which allows to
 * create new Length object by 'length()' instead of 'new Length()'
 */
var length = function (value, unit) {
  return new Length(value, unit);
};

export { Length, length };
