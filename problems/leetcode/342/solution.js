/**
 * https://leetcode.com/problems/power-of-four/editorial/?envType=daily-question&envId=2023-10-23
 * @param {number} n 
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
  return n > 0 && isBitwisePowerOfTwo(n) && isBitwisePowerOfFour(n);
}

// Any power of two would be a single 1-bit followed by zeros.
// Example: "1000" won't equal zero in a bitwise AND
// with any odd number like "1001"
const isBitwisePowerOfTwo = n => (n & (n - 1)) === 0;

// Any power of four would be single 1-bit followed by zeros at even positions
// bit 0, bit 2, bit 4, etc...
// It won't equal zero in a bitwise AND with any bit in any other position (e.g., bit 1).
// We know the max number here is 2^31 so we make use of that to check only 31 bits.
const isBitwisePowerOfFour = n => (n & 0xAAAAAAAA) === 0;
