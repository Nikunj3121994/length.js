import { Length, length } from './lib/length';
import { to, add, getString, getUnit, getValue, toPrecision } from './lib/functions';

// Initialize Length object prototype
var proto = Length.prototype;

// Add current version number to Length object prototype
proto.version = '1.1.0';

// Add functions to Length object prototype
proto.to = to;
proto.add = add;
proto.getValue = getValue;
proto.getUnit = getUnit;
proto.getString = proto.toString = getString;
proto.toPrecision = toPrecision;

// Expose Length object prototype (if user wants to add new functions)
length.fn = proto;

export default length;
