// https://leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const numsCount = new Array(nums.length + 1).fill(0);
    numsCount[0] = 1; // We fill "0" value because nums go from 1 to n
    
    for (let i = 0; i < nums.length; ++i) {
      numsCount[nums[i]]++;
    }

    let duplicate;
    let missing;

    for (let i = 0; i < numsCount.length && (!duplicate || !missing); i++) {
      if (numsCount[i] === 0) {
        missing = i;
      }  
      else if (numsCount[i] === 2) {
        duplicate = i;
      }
    }

    return [duplicate, missing];
};
