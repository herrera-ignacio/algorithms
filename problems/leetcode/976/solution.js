const assert = require('node:assert');
// https://leetcode.com/problems/largest-perimeter-triangle/description/

function largestPerimeter(nums) {
  // sort in-place in descending order O(n log n)
  const sortedNums = nums.sort((a, b) => b - a);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (sortedNums[i] < sortedNums[i + 1] + sortedNums[i + 2]) {
      return sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2];
    }
  }
  // Else, no valid triangle
  return 0;
}

assert.equal(largestPerimeter([2,1,2]), 5);
assert.equal(largestPerimeter([1,2,1]), 0);
