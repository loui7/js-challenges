
/*
Returns a friendly message informing the user of
the total bill including tip.
*/

function calculateTip(price) {
  if (typeof price !== 'number') {
    return 'Unexpected input';
  }

  const tipMultiplier = 1.1;
  const totalBill = (price * tipMultiplier).toFixed(2);
  return `Your total bill, with tip, is $${totalBill}`;
}

module.exports = calculateTip;
