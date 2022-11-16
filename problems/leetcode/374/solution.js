// 374 https://leetcode.com/problems/guess-number-higher-or-lower/

const picked = 10;

/* Provided by LeetCode
* @param {number} num   your guess
* @return 	     -1 if num is higher than the picked number
*			      1 if num is lower than the picked number
*               otherwise return 0
*/
function guess(n) {
  return n === picked ? 0
    : n < picked ? -1
    : 1;  
}

function guessNumber(n) {
  const diff = guess(n);
  
  if (diff === 0) return n;

  if (diff < 0) return guessNumber(Math.floor(Math.random() * n));

  return guessNumber(n + Math.floor(Math.random() * n));  
}
