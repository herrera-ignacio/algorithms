/**
 * 
 * @param {number} n 
 * @return {boolean}
 */
const isPowerOfTwo = n => n > 0 && (n & n-1) === 0;
