// https://leetcode.com/problems/remove-element/solutions/3305731/javascript-o-n-keep-relative-order-commented/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Removes all occurrences of val in-place without
 * changing relative order of elements.
 * Returns the number of element in nums which are not equal to val.
 * Worst time complexity: O(n)
 */
var removeElementV = function(nums, val) {
  // Pointer to current element
  // Note: All elements between 0 and i must be
  // different than val.
  let i = 0;
  // Pointer to the end of the array
  // Note: All elements between 0 and nums.length - 1
  // should not be considered as part of the array.
  let k = nums.length - 1;

  while (i < nums.length) {
    if (nums[i] === val) {
      // Once we find a value that doesn't get deleted,
      // we'll place it in this index i (see else branch).
      // For now, we can just assume one more element will get discarded.
      // If we don't find a next value to use as replacement,
      // then this is the last element that gets discarded.
      k--;
    } else {
      // Moves element as many slots as removed elements so far
      // to fill the gaps accordingly.
      // We don't care what nums[i] holds at the moment because it will either
      // get replaced in next iterations, or it will get discarded.
      nums[i - (nums.length - 1 - k)] = nums[i];
    }
    i++;
  }

  return k + 1;
}


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Removes all occurrences of val in-place without
 * changing relative order of elements.
 * Returns the number of element in nums which are not equal to val.
 * Worst time complexity: O(n)
 */
var removeElementV2 = function(nums, val) {
  // Pointer to current element
  // Note: All elements between 0 and i must be
  // different than val.
  let i = 0;
  // Amount of elements to be deleted (i.e. elements equal to val).
  // Note: All elements beyond (nums.length - 1 - k) index
  // should not be considered as part of the array.
  let k = 0 

  while (i < nums.length) {
    if (nums[i] === val) {
      // Once we find a value that doesn't get deleted,
      // we'll place it in this index i (see else branch)).
      // For now, we can just assume one more element will get discarded.
      // If we don't find a next value to use as replacement,
      // then this is the last element that gets discarded.
      k++;
    } else {
      // Moves element backwards as many slots as removed elements so far
      // to fill the gaps accordingly.
      // We don't care what nums[i] holds at the moment because it will either
      // get replaced in next iterations, or it will get discarded.
      nums[i - k] = nums[i];
    }
    i++;
  }

  return nums.length - k;
}
