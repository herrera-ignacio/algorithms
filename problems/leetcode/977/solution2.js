// https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
  let i = 0;
  let r = nums.length - 1;
  let k = r;
  const squares = new Array(nums.length);

  while (k >= 0) {
    if (nums[r] ** 2 >= nums[i] ** 2) {
      squares[k] = nums[r] ** 2;
      r--;
    } else {
      squares[k] = nums[i] ** 2;
      i++;
    }
    k--;
  }

  return squares;
};
