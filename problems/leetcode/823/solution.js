/**
 * https://leetcode.com/problems/binary-trees-with-factors/editorial/
 * Dynamic programming approach
 * O(n^2) because of two for loops iterating i and j
 * @param {number[]} arr 
 * @return {number}
 */
const numFactoredBinaryTrees = arr => {
  const mod = 10 ** 9 + 7;

  arr.sort((a, b) => a - b);

  const indexes = new Map(
    arr.map((val, idx) => [val, idx])
  );

  const dp = new Array(arr.length).fill(1);

  // array will be sorted ASC
  // therefore, we'll calculate leafs first (1 possible tree)
  // and whenever we try to calculate a given tree
  // we know that we have calculated all its possible subtrees already
  // because we processed all nodes with lower values
  arr.forEach((val, i) => {
    for (let j = 0; j < i; j++) {
      if (val % arr[j] === 0) {
        // A[j] will be left child, calculate right child
        let rightChild = val / arr[j];
        if (indexes.has(rightChild)) {
          // num of trees for this node would equal to
          // num of trees for right child * numbers of trees of left child
          dp[i] += dp[j] * dp[indexes.get(rightChild)];
          console.log(dp[i]);
          dp[i] %= mod;
        }
      }
    }
  });

  return dp.reduce((sum, val) => {
    return sum + val;
  }, 0) % mod;
}
