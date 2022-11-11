// https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/2804404/javascript-o-n-1-pass/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let lastSeen = undefined;
  let lastIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === lastSeen) {
      nums[i] = null;
    } else {
      lastSeen = nums[i];

      if (lastIdx !== i) {
        nums[lastIdx] = nums[i];
        nums[i] = null;
      }

      lastIdx++;
    }
  }

  return lastIdx;
}
