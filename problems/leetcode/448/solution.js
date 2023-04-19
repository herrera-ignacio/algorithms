/**
 * 
 * @param {number[]} nums 
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const res = new Array(nums.length + 1).fill(0);

  nums.forEach(n => {
    if (n <= nums.length) {
      res[n] = n;
    }
  });

  // if number was not found, fill with number
  // else mark it as 0 so we can filter it.
  return res
    .map((n, idx) => n === 0 ? idx : 0)
    .filter(n => n !== 0);
}
