/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const memo = new Array(n);
  return climbStairsAux(0, n, memo);
};

const climbStairsAux = (i, n, memo) => {
  if (i > n) return 0;
  if (i === n) return 1;
  if (memo[i] > 0) return memo[i];
  memo[i] = climbStairsAux(i+1, n, memo) + climbStairsAux(i+2, n, memo);
  return memo[i];
}
