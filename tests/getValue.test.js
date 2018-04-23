import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('getValue()', () => {
  it('Should correctly return positive value', () => {
    const tests = [];
    Object.keys(standardUnitDependences).forEach((unit) => {
      tests.push([Math.random(), unit]);
    });

    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).getValue()).toEqual(tests[i][0]);
    }
  });

  it('Should correctly return negative value', () => {
    const tests = [];
    Object.keys(standardUnitDependences).forEach((unit) => {
      tests.push([Math.random() - 1, unit]);
    });

    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).getValue()).toEqual(tests[i][0]);
    }
  });
});
