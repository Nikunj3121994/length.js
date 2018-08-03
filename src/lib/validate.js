import { supportedUnits } from './units';

var errors = {
  unitType: 'Unsupported unit type! Supported types:\n' + supportedUnits + '.',
  valueType: 'Value must be a number!',
  noUnit: 'You have to pass unit type!',
  noValue: 'You have to pass value!',
};

function validate(value, unit) {
  validateValue(value);
  validateUnit(unit);
}

function validateUnit(unit) {
  if (typeof unit === 'undefined') {
    throw Error(errors.noUnit);
  } else if (supportedUnits.indexOf(unit) == -1) {
    throw Error(errors.unitType);
  }
}

function validateValue(value) {
  if (typeof value === 'undefined') {
    throw Error(errors.noValue);
  } else if (typeof value !== 'number') {
    throw Error(errors.valueType);
  }
}

export { validate, validateUnit, validateValue };
