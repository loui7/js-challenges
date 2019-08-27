/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largestNumber.js

Question: Why does the test pass for the third (last) test
with no changes to the function?
*/

function largestNumber(arr) {
  let biggest = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}

module.exports = largestNumber;
