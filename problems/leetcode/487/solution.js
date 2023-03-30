// https://leetcode.com/problems/max-consecutive-ones-ii/description/

/**
 * 
 * @param {number[]} nums 
 * @returns {number} The amount of consecutive 1's in the array if you flip at most one 0
 * 
 */
function findMaxConsecutiveOnes(nums) {
  if (nums.length === 1) return 1;

  let maxSum = 0;
  let curOnes = 0;
  let curSum = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === 1) {
      curOnes++;
      // We update current sum, this will contain the previous consequetive ones
      // that can be separated by at most one zero,
      // for example [1,1,0,1,1], or [1,1].
      curSum++;
    } else if (nums[i] === 0) {
      // If we find a 0, then we will begin counting consecutive ones again.
      // Moreover, we will reset our current counter to be the amount of consecutive
      // ones before this zero, and +1 because of this zero being transformed to one.
      curSum = curOnes + 1;
      curOnes = 0;
    }

    // On each iteration, validate if we've found a greater amount
    // of consecutive ones.
    if (curSum > maxSum) {
      maxSum = curSum;
    }

    i++;
  }

  return maxSum;
}
