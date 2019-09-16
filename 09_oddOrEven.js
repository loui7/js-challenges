/*
Given an array of numbers, determine whether the sum
of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
  const total = array.reduce((tot, num) => (tot + num), 0);
  return total % 2 === 0 ? 'even' : 'odd';
}

// console.log(oddOrEven([1023, 1, 2]));
// .toBe('even')

module.exports = { oddOrEven };
