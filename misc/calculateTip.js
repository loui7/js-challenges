
/*
Returns a friendly message informing the user of
the total bill including tip.
*/

function calculateTip(price) {
  if (typeof price !== 'number') {
    return 'Unexpected input'
  }

  const tipMultiplier = 1.1;
  const totalBill = (price * tipMultiplier).toFixed(2)
  return `Your total bill, with tip, is $${totalBill}`;
}

const assert = require('assert');

describe('calculateTip', () => {
  it(`checks calculateTip() returns a friendly message
      informing the user of the total bill including tip.`, () => {
    try {
      totalBillMsg = calculateTip(125);
    } catch {}
    assert.equal(totalBillMsg, 'Your total bill, with tip, is $137.50');
  })

  it(`checks calculateTip() elegantly deals with unexpected inputs`, () => {
    try {
      totalBillMsg = calculateTip('10 dollarydoos.');
    } catch {}
    assert.equal(totalBillMsg, 'Unexpected input');
  })
})