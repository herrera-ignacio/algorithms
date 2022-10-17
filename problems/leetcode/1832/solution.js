// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetMap = new Map(alphabet.map(c => [c, false]));

  sentence.split('').forEach((char) => {
    alphabetMap.set(char, true);
  });

  for (let [_char, found] of alphabetMap) {
    if (!found) {
      return false;
    }
  }

  return true;
};
