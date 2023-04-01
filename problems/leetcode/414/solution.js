/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = nums[0];
    const maxArr = [null, null, third];

    nums.forEach(n => {
      if (!maxArr.includes(n)) {
        if (maxArr[2] < n) {
          maxArr[0] = maxArr[1];
          maxArr[1] = maxArr[2];
          maxArr[2] = n;
        } else if (!maxArr[1] || maxArr[1] < n) {
          maxArr[0] = maxArr[1];
          maxArr[1] = n;
        } else if (!maxArr[0] || maxArr[0] < n) {
          maxArr[0] = n;
        }
      } 
    });

    return Number.isInteger(maxArr[0]) ? maxArr[0] : maxArr[2];
};
