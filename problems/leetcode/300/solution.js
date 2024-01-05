/**
 * 
 * @param {number[]} nums (assumes 1 element)
 * @return {number}
 */
const lengthOfLISDp = (nums) => {
  const dp = new Array(nums.length).fill(1);
  let maxLen = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        if (dp[i] > maxLen) {
          maxLen = dp[i];
        }
      }
    }
  }

  return maxLen;
}
