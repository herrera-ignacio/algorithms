/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let temp = 0;
  return nums.reduce((res, num) => {
      if (num === 1) {
          temp++;
      } else {
          temp = 0;
      }
      
      return res > temp ? res : temp;
 }, 0);
};
