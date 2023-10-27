/**
 * https://leetcode.com/problems/longest-palindromic-substring/editorial/
 * Time complexity: O(n^2) but on average faster than DP approach
 * Space complexity: O(1) runs in-place
 * @param {string} s 
 * @return {string}
 */
const longestPalindrome = (s) => {
  let ans = [0,0];

  for (let i = 0; i < s.length; i++) {
    const maxOddPalindromeLen = getMaxPalindromeLenFromCenter(i, i, s);
    const maxEvenPalindromeLen = getMaxPalindromeLenFromCenter(i, i+1, s);

    if (maxOddPalindromeLen > ans[1] - ans[0] + 1) {
      const distance = Math.floor(maxOddPalindromeLen / 2);
      ans = [i - distance, i + distance]
    }

    if (maxEvenPalindromeLen > ans[1] - ans[0] + 1) {
      // consider the case "aa", dividing by 2 would give distance 1
      // but pointers are already one step away (i, i+1)
      // so we need to substract 1 unit
      const distance = (maxEvenPalindromeLen / 2) - 1;
      ans = [i - distance, i + 1 + distance]
    }
  }

  return s.substring(ans[0], ans[1] + 1);
}

const getMaxPalindromeLenFromCenter = (i, j, s) => {
  let left = i, right = j;
  while (
    left >= 0
    && right < s.length
    && s[left] === s[right]
  ) { 
    left--, right++
  }

  // we need to substract 1 because when we get here
  // pointers will be already 1 extra step away from each other
  // meaning we should not consider last step as part of the palindrome
  return right - left - 1;
}
