/**
 * Dynamic programming O(n^3)
 * @param {string} s 
 * @returns {string}
 */
const longestPalindrome = (s) => {
  let answer = [0, 0];

  // checks if string from i to j is palindrome
  const isPalindrome = (new Array(s.length).fill())
    .map(_ => new Array(s.length)
    .fill(false));

  // each single letter is a palindrome
  for (let i = 0; i < s.length; i++) {
    isPalindrome[i][i] = true;
  }
  
  // check substrings of length 2 for same letters
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i+1]) {
      isPalindrome[i][i + 1] = true;
      answer = [i, i + 1]
    }
  }

  // check substrings of length 3 and above
  for (let diff = 2; diff < s.length; diff++) {
    for (let i = 0; i < s.length - diff; i++) {
      const j = i + diff;
      if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
        isPalindrome[i][j] = true;
        answer = [i, j];
      }
    }
  }

  return s.substring(answer[0], answer[1] + 1);
}
