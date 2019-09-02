const assert = require('assert');
const calculateTip = require('../calculateTip');

describe('calculateTip', () => {
  it(`checks calculateTip() returns a friendly message
      informing the user of the total bill including tip.`, () => {
    try {
      totalBillMsg = calculateTip(125);
    } catch (err) { return err; }
    assert.equal(totalBillMsg, 'Your total bill, with tip, is $137.50');
  });

  it('checks calculateTip() elegantly deals with unexpected inputs', () => {
    try {
      totalBillMsg = calculateTip('10 dollarydoos.');
    } catch (err) { return err; }
    assert.equal(totalBillMsg, 'Unexpected input');
  });
});
