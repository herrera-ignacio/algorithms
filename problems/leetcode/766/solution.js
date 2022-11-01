// https://leetcode.com/problems/toeplitz-matrix/

const assert = require('assert');

// O(2n)
function isToeplitzMatrix(matrix) {
  const cols = matrix[0].length;
  const rows = matrix.length;

  // Memoize result to avoid checking the same diagonal twice.
  const checked = new Array(rows).fill(new Array(rows).fill(false));

  let row = 0;
  let col = 0;

  while (row < rows) {

    while (col < cols) {
      if (col-1 >= 0 && row-1 >= 0 && matrix[row-1][col-1] !== matrix[row][col]) {
        return false;
      }
      
      col++
    }

    col = 0;
    row++;
  }

  return true;
}

assert.equal(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]), true);
assert.equal(isToeplitzMatrix([[1,2],[2,2]]), false);

