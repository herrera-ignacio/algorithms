// 151 https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * 
 * @param {string} s 
 */
function reverseWords(s) {
  let words = [];
  let word = '';
  
  for (let c of s) {
    if (c !== ' ') {
      word += c;
    } else {
      if (word.length > 0) {
        words.push(word);
        word = '';
      }
    }
  }

  // Last word
  if (word.length > 0) {
    words.push(word);
  }

  return words.reverse().join(' ');
}
