import sum from './sum';

describe('testing with jest', () => {
  it('should sum function return 13', () => {
    const a = 10;
    const b = 3;
    const result = 13;
    expect(sum(a, b)).toBe(result);
  })
})