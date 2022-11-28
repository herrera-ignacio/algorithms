/**
 * https://leetcode.com/problems/sum-of-subarray-minimums/
 * Monotonic stack - contribution of each element
 * https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2700011/sum-of-subarray-minimums/
 */

function sumSubarrayMins(arr) {
  const mod = 10 ** 9 + 7;
  const stack = [];
  let sumOfMins = 0;

  // We'll go until i equals arr.length
  // because we'll pop everything in the stack then.
  for (let i = 0; i <= arr.length; i++) {

    // When i reaches the array length, all the elements have been processed,
    // and the remaining elements in the stack should now be popped out.
    while (stack.length > 0 && (i === arr.length || arr[stack.at(-1)] >= arr[i])) {

      // We've found an element smaller than the previous one
      // This "starts" a new subarray where arr[i] will be the minimum,
      // ">=" ensures that no contribution is counted twice.
      // Therefore, we'll calculate contribution for the last found minimum (top of the stack).

      // We'll compute contribution for this element. O(1)
      const lastSmallerIdx = stack.pop();

      // Latest smaller is on top of the stack now.
      const prevSmallerIdx = stack.length > 0 ? stack.at(-1) : -1;

      // Our next smaller is on current index.
      const nextSmallerIdx = i;

      // Count subarrays where mid is the minimum element
      const count = (lastSmallerIdx - prevSmallerIdx) * (nextSmallerIdx - lastSmallerIdx);
      sumOfMins += count * arr[lastSmallerIdx];
    }

    /**
     * While building a monotonic stack, each element is pushed in once
     * and popped out once. O(n).
     */
    stack.push(i);
  }

  return sumOfMins % mod;
}
