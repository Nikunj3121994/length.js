import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('getString()', () => {
  it('Should correctly return string with value and unit type', () => {
    const tests = [];
    Object.keys(standardUnitDependences).forEach((unit) => {
      tests.push([Math.random(), unit]);
    });

    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).getString()).toEqual(tests[i][0] + tests[i][1]);
    }
  });
});
