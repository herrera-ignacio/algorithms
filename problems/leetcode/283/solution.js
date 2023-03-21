/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    
    while (i < nums.length) {
      if (nums[i] !== 0) {        
        nums[j] = nums[i];
        j++;
      }

      i++;
    }

    while (j < nums.length) {
      nums[j] = 0;
      j++
    }
}
