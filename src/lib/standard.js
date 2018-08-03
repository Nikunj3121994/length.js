import { standardUnitDependences } from './units';

// Convert value in passed unit to value in standard unit
function getValueInStandardUnit(value, unit) {
  return value * standardUnitDependences[unit];
}

// Convert value in standard unit to value in passed unit
function getValueByUnit(value, unit) {
  return value * (1 / standardUnitDependences[unit]);
}

export { getValueInStandardUnit, getValueByUnit };
