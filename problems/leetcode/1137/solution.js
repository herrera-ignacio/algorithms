/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
    return tribonacciMemoized(n)
}

/**
 * @param n
 * @param memo {Object}
 */
const tribonacciMemoized = (n, memo = { 0: 0, 1: 1, 2: 1}) => {
    if (n in memo) return memo[n];
    memo[n] = tribonacciMemoized(n - 3, memo) + tribonacciMemoized(n - 2, memo) + tribonacciMemoized(n-1 ,memo)
    return memo[n];
}