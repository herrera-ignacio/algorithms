// Make the string great
// https://leetcode.com/problems/make-the-string-great/

const assert = require('assert');

/**
 * 
 * @param {string} c1 
 * @param {string} c2 
 * @returns {boolean}
 */
const isSameCharDifferentCase = (c1, c2) => {
  return c1 !== c2 && c1.toUpperCase() === c2.toUpperCase();
}

/**
 * 
 * @param {string} s 
 * @return {string}
 */
function makeGood(s) {
    let stack = new Array(s.length);
    let top = -1;

    for (let i = 0; i < s.length; i++) {
      if (stack[top] && isSameCharDifferentCase(s[i], stack[top])) {
        stack[top--] = undefined;
      } else {
        stack[++top] = s[i];
      }
    }

    return stack.filter(s => !!s).join('');
}

assert.equal(makeGood('leEeetcode'), 'leetcode');
assert.equal(makeGood('abBAcC'), '');
assert.equal(makeGood('s'), 's');
