/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m + n - 1;
  let j = m - 1;
  let k = n - 1;
  while (i >= 0) {
      if (k < 0 || j >= 0 && nums1[j] >= nums2[k]) {
          nums1[i] = nums1[j];
          j--;
      } else {
          nums1[i] = nums2[k];
          k--;
      }
      i--;
  }
};
