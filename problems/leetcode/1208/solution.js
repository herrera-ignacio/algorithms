/**
 * @param {number[]} arr
 * @return {boolean}
 */
 function uniqueOccurrences(arr) {
  const occ = {};
  arr.forEach(e => {
      occ[e] = 1 + occ[e] || 0;
  });
  const s = new Set(Object.values(occ));
  return s.size === Object.keys(occ).length;
};
