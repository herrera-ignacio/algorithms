// https://leetcode.com/problems/longestPairs-palindrome-by-concatenating-two-letter-words/

const assert = require('assert');

/**
 * @param {string[]} words
 * @return {number}
 * O(words)
 */
function longestPalindrome(words) {
  let count = {};
  let answer = 0;
  let central = false;

  // O(words): Count all words
  for (let w of words) {
    count[w] = count[w] ? count[w] + 1 : 1;
  }

  // O(words): Calculate answer
  for (let w of Object.keys(count)) {
    let wordCount = count[w];

    if (w.charAt(0) === w.charAt(1)) {
      // word is palindrome
      if (wordCount % 2 === 0) {
        answer += wordCount;
      } else {
        // We'll get all but one
        answer += wordCount - 1;
        // The isolated one becomes central
        central =  true;
      }
    } else if (w.charAt(0) < w.charAt(1)) {
      // word is non-palindrome
      // we only count one of the "two" words that compose the palindrome
      const reverseCount = count[w.charAt(1) + w.charAt(0)] ?? 0;
      answer += 2 * Math.min(wordCount, reverseCount);
    }
  }

  if (central) {
    answer += 1;
  }

  return answer * 2 
}

// assert.equal(longestPalindrome(["cc","ll","xx"]), 2);
// assert.equal(longestPalindrome(["ab","ty","yt","lc","cl","ab"]), 8);
// assert.equal(longestPalindrome(["lc","cl","gg"]), 6);
assert.equal(longestPalindrome(["dd","aa","bb","dd","aa","dd","bb","dd","aa","cc","bb","cc","dd","cc"]), 22);
