/**
 * length.js v1.1.0 (https://github.com/appalaszynski/length.js)
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
    fm: 1.8288,
    mi: 1609.344,
    ld: 384402000,
    au: 149597870700,
    ly: 9460730472580800,
    pc: (648000 / Math.PI) * 149597870700,
  };

  var supportedUnits = Object.keys(standardUnitDependences);

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

  function Length(value, unit) {
    validate(value, unit);

    this.value = value;
    this.unit = unit;
  }

  var length = function (value, unit) {
    return new Length(value, unit);
  };

  function getValueInStandardUnit(value, unit) {
    return value * standardUnitDependences[unit];
  }

  function getValueByUnit(value, unit) {
    return value * (1 / standardUnitDependences[unit]);
  }

  function to(unit) {
    validateUnit(unit);
    var valueInStandardUnit = getValueInStandardUnit(this.value, this.unit);
    var convertedValue = getValueByUnit(valueInStandardUnit, unit);
    return length(convertedValue, unit);
  }

  function add(value, unit) {
    if (typeof unit === 'undefined' || this.unit === unit) {
      validateValue(value);
      return length(this.value + value, this.unit);
    }
    validate(value, unit);
    if (value === 0) return length(this.value, this.unit);
    var newValue = this.value + length(value, unit).to(this.unit).getValue();
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

  var proto = Length.prototype;

  proto.version = '1.1.0';

  proto.to = to;
  proto.add = add;
  proto.getValue = getValue;
  proto.getUnit = getUnit;
  proto.getString = proto.toString = getString;
  proto.toPrecision = toPrecision;

  length.fn = proto;

  return length;

})));
