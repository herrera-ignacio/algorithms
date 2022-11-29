/**
 * https://leetcode.com/problems/find-smallest-common-element-in-all-rows/
 * O(n * m)
 * https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/412305/find-smallest-common-element-in-all-rows/
 */

/**
 * 
 * @param {number[][]} mat 
 * @return {number}
 */
function smallestCommonElement(mat) {
  const count = {};
  for (let col = 0; col < mat[0].length; col++) {
    for (let row = 0; row < mat.length; row++) {
      if (count[mat[row][col]] === mat.length - 1) {
        return mat[row][col];
      } else {
        count[mat[row][col]] = 1 + (count[mat[row][col]] ?? 0);
      }
    }
  }
  return -1;
}
