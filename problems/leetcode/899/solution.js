// https://leetcode.com/problems/orderly-queue/

/**
 * 
 * @param {string} s 
 * @param {number} k 
 */
function orderlyQueue(s, k) {
  const str = [...s];
  let min = s;

  if (k === 1) {
    // rotate the string
    for (let i = 0; i < str.length; i++) {
      const rotated = str.slice(i).concat(str.slice(0, i)).join('');
      if (rotated < min) {
        min = rotated;
      }
    }
  } else {
    // Any permutation is valid
    min = str.sort().join("");
  }

  return min;
}
