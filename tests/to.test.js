import length from '../length';
import { standardUnitDependences } from '../src/lib/units';

describe('to()', () => {
  it('Should throw error if arguments have not been passed', () => {
    expect(() => { length(1, 'm').to() }).toThrowError();
  });

  it('Should throw error if passed unit type is not supported', () => {
    expect(() => { length(1, 'm').to('unit') }).toThrowError();
  });

  it('Should correctly convert to meters', () => {
    expect(length(1, 'm').to('m')).toEqual({ value: 1, unit: 'm' });
  });

  it('Should correctly convert to decimeters', () => {
    const value = 1;
    expect(length(value, 'm').to('dm')).toEqual({ value: value * (1 / standardUnitDependences.dm), unit: 'dm' });
  });

  it('Should correctly convert to kilometers', () => {
    const value = 1;
    expect(length(value, 'm').to('km')).toEqual({ value: value * (1 / standardUnitDependences.km), unit: 'km' });
  });

  it('Should correctly convert to inches', () => {
    const value = 1;
    expect(length(value, 'm').to('in')).toEqual({ value: value * (1 / standardUnitDependences.in), unit: 'in' });
  });

  it('Should correctly convert to yards', () => {
    const value = 1;
    expect(length(value, 'm').to('yd')).toEqual({ value: value * (1 / standardUnitDependences.yd), unit: 'yd' });
  });

  it('Should correctly convert to miles', () => {
    const value = 1;
    expect(length(value, 'm').to('mi')).toEqual({ value: value * (1 / standardUnitDependences.mi), unit: 'mi' });
  });

  it('Should correctly convert meters to kilometers', () => {
    const value = 1000
    expect(length(value, 'm').to('km')).toEqual({ value: 1, unit: 'km' })
  });

  it('Should correctly convert nanometers to centimeters', () => {
    const value = 1;
    expect(length(value, 'nm').to('cm')).toEqual({ value: 1.0000000000000001e-7, unit: 'cm'})
  });

  it('Should correctly convert  micrometers to centimeters', () => {
    const value = 1
    expect(length(value, 'um').to('cm')).toEqual({ value: 0.00009999999999999999, unit: 'cm' })
  });

  it('Should correctly convert picometers to centimeters', () => {
    const value = 1
    expect(length(value, 'pm').to('cm')).toEqual({ value: 10 ** -10, unit: 'cm' })
  });

  it('Should correctly convert picometers to yards', () => {
    const value = 100000000
    var result = length(value, 'pm').to('yd')
    expect(parseFloat(result.value.toFixed(13))).toEqual(0.0001093613298)
    expect(result.unit).toEqual('yd')
  });
});
