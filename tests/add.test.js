import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('add()', () => {
  const tests = [];
  Object.keys(standardUnitDependences).forEach((unit) => {
    tests.push([Math.random(), unit]);
  });

  it('Should correctly add positive value', () => {
    const incrementBy = Math.random();

    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).add(incrementBy)).toEqual({ value: tests[i][0] + incrementBy, unit: tests[i][1] });
    }
  });

  it('Should correctly add negative value', () => {
    const decrementBy = Math.random() - 1;
    
    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).add(decrementBy)).toEqual({ value: tests[i][0] + decrementBy, unit: tests[i][1] });
    }
  });
  
  it('Should correctly add zero', () => {
    for (let i = 0; i < tests.length; i++) {
      expect(length(tests[i][0], tests[i][1]).add(0)).toEqual({ value: tests[i][0], unit: tests[i][1] });
    }
  });

  it('Should throw error when argument is not passed', () => {
    expect(() => { length(Math.random(), 'cm').add(); }).toThrowError();
  });

  it('Should throw error when argument is not a number', () => {
    expect(() => { length(Math.random(), 'cm').add('string'); }).toThrowError();
    expect(() => { length(Math.random(), 'cm').add({ key: 'value' }); }).toThrowError();
    expect(() => { length(Math.random(), 'cm').add([1, 2, 3, 4, 5]); }).toThrowError();
    expect(() => { length(Math.random(), 'cm').add(() => { }); }).toThrowError();
  });

  it('Should correctly add value in other unit', () => {
    expect(length(10, 'cm').add(1, 'm')).toEqual({ value: 110, unit: 'cm' });
    expect(length(9, 'dm').add(2, 'in')).toEqual({ value: 9.508, unit: 'dm' });
    expect(length(10, 'cm').add(0, 'yd')).toEqual({ value: 10, unit: 'cm' });
  });
});
