// https://leetcode.com/problems/remove-element/solutions/3305731/javascript-o-n-keep-relative-order-commented/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Removes all occurrences of val in-place without
 * changing relative order of elements.
 * Worst time complexity: O(n)
 */
var removeElement = function(nums, val) {
    let i = 0;
    let k = nums.length - 1;

    while (i < nums.length) {
      if (nums[i] === val) {
        // Once we find a value that doesn't get deleted,
        // we'll swap it with this element.
        // If it is at the end of the array,
        // it doesn't matter because we'll ignore the last
        // nums.length - 1 - k elements.
        k--;
      } else {
        // Moves element as many slots as removed elements
        // to fill the gaps accordingly
        nums[i - (nums.length - 1 - k)] = nums[i];
      }
      i++;
    }

    return k + 1;
}
