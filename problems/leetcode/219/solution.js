// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * O(n)
 * Can be optimized for average case if we use Array.every
 * instead of a forEach so we can stop the iteration earlier.
 */
var containsNearbyDuplicate = function(nums, k) {
  const differenceMap = {};
  let found = false;
  
  nums.forEach((n, idx) => {
    if (differenceMap[n] !== undefined) {
      // We've found this number before
      if (Math.abs(differenceMap[n] - idx) <= k) {
          found = true;
      } else {
        // We keep track of the last index found
        // We know that any other idx will be farther
        // from the previous one
        differenceMap[n] = idx;
      }
    } else {
      // It's the first time we find this number
      differenceMap[n] = idx;
    }
  });

  return found;
};
