/**
 * @param {string} s
 * @return {boolean}
 * Assumes s.length is even;
 */
const halvesAreAlike = (s) => {
  const vowels = { a: true, e: true, i: true, o: true, u: true };
  let firstHalf = 0;
  let secondHalf = 0;
   
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels[s[i].toLowerCase()]) {
      firstHalf++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels[s[i].toLowerCase()]) {
      secondHalf++;
    }
  }

  return firstHalf === secondHalf;
};
