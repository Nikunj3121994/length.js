/*!
 * length.js v0.0.9 (https://github.com/appalaszynski/length.js)
 * Copyright (c) 2018 appalaszynski (https://github.com/appalaszynski)
 * Licensed under MIT (https://github.com/appalaszynski/length.js/blob/master/LICENSE)
 */
;(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else {
    global.length = factory();
  }
}(this, (function () { 'use strict';

  // This object stores information about dependences between units and meter.
  var standardUnitDependences = {
    pm: Math.pow(10, -12),
    nm: Math.pow(10, -9),
    um: Math.pow(10, -6),
    mm: Math.pow(10, -3),
    cm: Math.pow(10, -2),
    dm: Math.pow(10, -1),
    m: 1,
    dam: Math.pow(10, 1),
    hm: Math.pow(10, 2),
    km: Math.pow(10, 3),
    nmi: 1852,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.344,
    au: 149597870700,
    ly: 9460730472580800,
    pc: (648000 / Math.PI) * 149597870700,
  };

  // Array of currently supported units.
  var supportedUnits = Object.keys(standardUnitDependences);

  // Function checks if value and unit are valid.
  function validate(value, unit) {
    if (typeof value === 'undefined' || typeof unit === 'undefined') {
      throw Error('You have to pass value and unit type!');
    } else if (typeof value !== 'number') {
      throw Error('Value must be a number!');
    } else if (supportedUnits.indexOf(unit) == -1) {
      throw Error('Unsupported unit type! Supported types:\n' + supportedUnits + '.');
    }
  }

  // Simpler version of validate() function - checks only unit correctness.
  function validateUnit(unit) {
    if (typeof unit === 'undefined') {
      throw Error('You have to pass unit type!');
    } else if (supportedUnits.indexOf(unit) == -1) {
      throw Error('Unsupported unit type! Supported types:\n' + supportedUnits + '.');
    }
  }

  // Simpler version of validate() function - checks only value correctness.
  function validateValue(value) {
    if (typeof value === 'undefined') {
      throw Error('You have to pass value!');
    } else if (typeof value !== 'number') {
      throw Error('Value must be a number!');
    }
  }

  // Length object constructor.
  function Length(value, unit) {
    validate(value, unit);

    this.value = value;
    this.unit = unit;
  }

  /**
   * Main function (available by global.length) which allows to
   * create new Length object by 'length()' instead of 'new Length()'.
   */
  var length = function (value, unit) {
    return new Length(value, unit);
  };

  // Function converts value in passed unit to value in standard unit.
  function getValueInStandardUnit(value, unit) {
    if (standardUnitDependences[unit] !== undefined) {
      return value * standardUnitDependences[unit]
    }
    return undefined;
  }

  // Function converts value in standard unit to value in passed unit.
  function getValueByUnit(value, unit) {
    if (standardUnitDependences[unit] !== undefined) {
      return value * (1 / standardUnitDependences[unit])
    }
    return undefined;
  }

  function to(unit) {
    // Check new unit correctness.
    validateUnit(unit);

    // Get value in current unit converted to value in standard unit.
    var valueInStandardUnit = getValueInStandardUnit(this.value, this.unit);

    // Get value in standard unit converted to value in unit passed by user.
    var convertedValue = getValueByUnit(valueInStandardUnit, unit);

    return length(convertedValue, unit);
  }

  function add(value, unit) {
    var newValue;

    if(typeof unit === 'undefined') {
      validateValue(value);

      newValue = this.value + value;
    } else {
      validate(value, unit);

      // If passed value is equal to 0, just return the same Length object.
      if (value === 0) return length(this.value, this.unit);

      newValue = this.value + length(value, unit).to(this.unit).getValue();
    }

    return length(newValue, this.unit);
  }

  function getValue() {
    return this.value;
  }

  function getUnit() {
    return this.unit;
  }

  function getString() {
    return this.value + this.unit;
  }

  function toPrecision(digits) {
    var value = digits ? this.value.toFixed(digits) : this.value;
    return length(parseFloat(value), this.unit);
  }

  // Initialize Length object prototype.
  var proto = Length.prototype;

  // Add current version number to Length object prototype.
  proto.version = '0.0.9';

  // Add functions to Length object prototype.
  proto.to = to;
  proto.add = add;
  proto.getValue = getValue;
  proto.getUnit = getUnit;
  proto.getString = getString;
  proto.toString = getString;
  proto.toPrecision = toPrecision;

  // Expose Length object prototype if user wants to add new functions.
  length.fn = proto;

  return length;

})));
