const { persistence } = require('../10_numberPersistence');

describe('Initial Tests', () => {
  test('Should return 3 steps for 39', () => {
    expect(persistence(39)).toBe(3);
    expect(persistence(25)).toBe(2);
    expect(persistence(999)).toBe(4);
  });
  test('Should return zero if num is a one digit number', () => {
    expect(persistence(4)).toBe(0);
    expect(persistence(9)).toBe(0);
  });
});
