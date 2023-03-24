const isEven = (num) => num % 2 === 0;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    
    while (i < j) {
        if (isEven(nums[i])) {
            i++;
        } else {
            if (isEven(nums[j])) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            } else {
                j--;
            }
        }
    }
    
    return nums;
};
