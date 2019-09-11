/*
Write a method which will act as a binary search which will find the
position and the actual number of steps required to find the position.
When the array has an even number of values the midpoint index will be rounded up.

Example:
    binaryArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps.
    In the first step, 3 is the midpoint index (value = 12).
    In the second step 1 is the midpoint index (value = 5).
    In the third and final step we are only left with 8 at index 2.

*/

function binarySearch(binaryArray, searchValue) {
  let staging = [...binaryArray];
  let searchedIndex;
  let lowInd = 0;
  let steps = 0;
  while (searchedIndex === undefined) {
    const mid = Math.floor(staging.length / 2);
    const midValue = staging[mid];
    console.log(staging, 'lowInd', lowInd, 'ind:', mid, 'val:', midValue);
    if (searchValue === midValue) {
      searchedIndex = lowInd + mid;
    }
    if (searchValue < midValue) {
      staging.splice(mid);
    } else {
      lowInd += mid;
      staging = staging.splice(mid);
    }
    steps += 1;
  }

  return [searchedIndex, steps];
}

module.exports = {
  binarySearch,
};
