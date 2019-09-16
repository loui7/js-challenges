/*
Write a function, "persistence", that takes in a positive parameter "num"
and returns its multiplicative persistence, which is the number of times
you must multiply the digits in num until you reach a single digit.

Examples:
persistence(39) === 3
Because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

persistence(999) === 4
Because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and 1*2 = 2
*/

function getDigitArr(num) {
  return String(num).split('').map((digit) => Number(digit));
}

function persistence(num) {
  let digits = getDigitArr(num);
  let counter = 0;
  while (digits.length > 1) {
    counter += 1;
    const newDigits = digits.reduce((tot, dig) => (tot * dig));
    digits = getDigitArr(newDigits);
  }
  return counter;
}

module.exports = {
  persistence,
};
