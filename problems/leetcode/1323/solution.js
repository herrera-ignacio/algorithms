// https://leetcode.com/problems/maximum-69-number/

const assert = require('assert');

/**
 * 
 * @param {number} n 
 */
function maximum69Number(n) {
  const s = n.toString();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '6') {
      return Number(`${s.slice(0, i)}9${s.slice(i+1, s.length)}`);
    }
  }

  return n;
}

assert.equal(maximum69Number(9669), 9969);
assert.equal(maximum69Number(9996), 9999);
assert.equal(maximum69Number(9999), 9999);
