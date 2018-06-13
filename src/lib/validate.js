import { supportedUnits } from './units';

var errors = {
  unsupportedValue: 'Unsupported unit type! Supported types:\n' + supportedUnits + '.',
  valueType: 'Value must be a number!',
  noUnit: 'You have to pass unit type!',
  noValue: 'You have to pass value!',
  noUnitAndValue: 'You have to pass value and unit type!',
};

// Checl if value and unit are valid.
function validate(value, unit) {
  if (typeof value === 'undefined' || typeof unit === 'undefined') {
    throw Error(errors.noUnitAndValue);
  } else if (typeof value !== 'number') {
    throw Error(erros.valueType);
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error(errors.unsupportedValue);
  }
};


// Simpler version of validate() function - checks only unit correctness.
function validateUnit(unit) {
  if (typeof unit === 'undefined') {
    throw Error(errors.noUnit);
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error(errors.unsupportedValue);
  }
};


// Simpler version of validate() function - checks only value correctness.
function validateValue(value) {
  if (typeof value === 'undefined') {
    throw Error(erros.noValue);
  } else if (typeof value !== 'number') {
    throw Error(erros.valueMustBeNumber);
  }
};

export { validate, validateUnit, validateValue };
