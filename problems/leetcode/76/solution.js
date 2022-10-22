/**
 * Assumptions:
 * 1) The answer is unique.
 * 2) Might include duplicates.
 * 3) Might include upper and lower case.
 * Time complexity: O(s+t)
 * @param {string} s - string
 * @param {string} t - target substring
 */
const minWindow = function(s, t) {
  if (t.length > s.length) return "";
  
  // Keep track of desired characters and their frequency.
  const charMaps = t.split('').reduce((map, c) => ({
    ...map,
    [c]: map[c] ? map[c] + 1 : 1,
  }), {});
  
  // Keep track of found characters that match desired frequency.
  const uniqueChars = Object.keys(charMaps).length;
  let matchingChars = 0;
  const windowCounts = {};


  // Pointers to current window
  let minWindow;
  let l = 0;
  let r = 0;
  let c;

  while (r < s.length) {
    c = s[r];
    windowCounts[c] = windowCounts[c] ? windowCounts[c] + 1 : 1;

    // The frequency of the character added equals the desired one
    if (charMaps[c] && charMaps[c] === windowCounts[c]) {
      matchingChars += 1;
    }

    // Try to contract the window till it ceases to be 'desirable'
    while (l <= r && matchingChars === uniqueChars) {
      c = s[l];

      // Save the smallest window until now.
      if (!minWindow || r-l < minWindow[1] - minWindow[0]) {
        minWindow = [l, r];
      }

      // Update window's char count.
      windowCounts[c] -= 1;
      
      // Update if we are still on a valid window.
      if (charMaps[c] && charMaps[c] > windowCounts[c]) {
        matchingChars -= 1;
      }

      // Contract the window;
      l++;
    }

    // Expand the window.
    r++;
  }

  return minWindow ? s.slice(minWindow[0], minWindow[1] + 1) : "";
};

console.log(minWindow("cabwefgewcwaefgcf", "cae"))
