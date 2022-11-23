// https://leetcode.com/problems/valid-sudoku/description/

/**
 * 
 * @param {character[][]} board (n x n)
 * @return {boolean}
 */
function isValidSudoku(board) {
  let rows = getListOfSets(board.length);
  let cols = getListOfSets(board.length);
  let boxes = getListOfSets(board.length);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let c = board[i][j];

      if (c === '.') { continue };

      let box = getBox(i, j);

      if (rows[i].has(c) || cols[j].has(c) || boxes[box].has(c)) {
        return false;
      } else {
        rows[i].add(c);
        cols[j].add(c);
        boxes[box].add(c);
      }
    }
  }

  return true;
}

const getBox = (i, j) => 3 * Math.floor(j / 3) + Math.floor(i / 3);
const getListOfSets = (n) => new Array(n).fill().map(_ => new Set());
