/**
 * 
 * @param {number[]} nums 
 * @return {number[][]}
 */
const findMatrix = (nums) => {
  const freq = {};
  const res = [];

  nums.forEach((num) => {
    if (freq[num] !== undefined) {
      freq[num] = freq[num] + 1;
    } else {
      freq[num] = 0;
    }
    
    if (res[freq[num]]) {
      res[freq[num]].push(num);
    } else {
      res[freq[num]] = [num];
    }
  });

  return res;
}
