const assert = require('assert');

const largestNumber = require('../02_largestNumber');

describe('largestNumber', () => {
  it('should return the largest number', () => {
    assert.equal(10, largestNumber([5, -2, 10]));
  });
  it('should ignore invalid array entries', () => {
    assert.equal(10, largestNumber([10, 10, 's']));
  });
  it('should return null if the array is empty', () => {
    assert.equal(null, largestNumber([]));
  });
});
