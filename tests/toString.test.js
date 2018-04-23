import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('toString()', () => {
  const tests = [];
  Object.keys(standardUnitDependences).forEach((unit) => {
    tests.push([Math.random(), unit]);
  });

  it('Should correctly return string when using toString directly', () => {
    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).toString()).toEqual(tests[i][0] + tests[i][1]);
    }
  });

  it('Should correctly return string when using toString indirectly', () => {
    for (let i = 0; i < tests.length; i++) {
      expect(`${length(tests[i][0], tests[i][1])}`).toEqual(tests[i][0] + tests[i][1]);
    }
  });
});
