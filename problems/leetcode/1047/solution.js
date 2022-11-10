// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * 
 * @param {string} s 
 */
function removeDuplicates(s) {
  const stack = [];

  for (let c of s) {
    if (stack[stack.length - 1] !== c) {
      stack.push(c);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
}
