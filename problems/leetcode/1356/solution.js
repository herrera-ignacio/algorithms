/**
 * Note: assumes numbers are positive. The used binary conversion method
 * doesn't work properly for negative numbers due to how JS represents them.
 * @param {number[]} arr 
 * @return {number[]}
 */
const sortByBits = (arr) => {
  return arr.sort((a, b) => {
    const aPositiveBits = a.toString(2).split('1').length - 1;
    const bPositiveBits = b.toString(2).split('1').length - 1;
    if (aPositiveBits === bPositiveBits) {
      return a - b;
    } else {
      return aPositiveBits - bPositiveBits;
    }
  });
}
