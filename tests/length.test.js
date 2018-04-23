import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('length()', () => {
  it('Should correctly create Length object and its properties', () => {
    const tests = [];
    Object.keys(standardUnitDependences).forEach((unit) => {
      tests.push([Math.random(), unit]);
    });

    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1])).toEqual({ value: tests[i][0], unit: tests[i][1] });
      expect(length(tests[i][0], tests[i][1]).constructor.name).toBe('Length');
    }
  });

  it('Should throw an error if arguments not passed', () => {
    expect(() => { length(); }).toThrowError();
  });

  it('Should throw an error if only one argument passed', () => {
    expect(() => { length(Math.random()); }).toThrowError();
  });

  it('Should throw an error if value argument is not a number', () => {
    expect(() => { length('string', 'cm'); }).toThrowError();
  });

  it('Should throw an error if passed unit type is not supported', () => {
    expect(() => { length(Math.random(), 'unit'); }).toThrowError();
  });
});
