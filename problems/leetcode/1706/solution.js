// https://leetcode.com/problems/where-will-the-ball-fall/

const assert = require('assert');

/**
 * Ball will always either get stuck, or move one row below.
 * Therefore, I strive for O(n*m) time because there are n balls and,
 * each could fall m rows at most.
 */

/**
 * 
 * @param {number[][]} grid 
 * @returns number[]
 */
function findBall(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const res = new Array(cols).fill(-1);

  let ball = 0;
  
  while (ball < cols) {

    let currRow = 0;
    let currCol = ball;
    let isStuck = false;

    while (currRow < rows && currCol >= 0 && currCol < cols && !isStuck) {
      const currPos = grid[currRow][currCol];

      if (currPos === 1) {
        // Redirect the ball to the right
        currCol++;
        // Check if it's blocked to go down or stuck against the right wall
        if (grid[currRow][currCol] === -1 || currCol === cols) {
          isStuck = true;
        }
      } else {
        // Redirect the ball to the left
        currCol--;
        // Check if it's blocked to go down or stuck against the left wall
        if (grid[currRow][currCol] === 1 || currCol === -1) {
          isStuck = true;
        }
      }

      currRow++;
    }

    if (!isStuck) {
      res[ball] = currCol;
    }

    ball++;
  }

  return res;
};

const case1 = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]];
const case2 = [[-1]];
const case3 = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]];

assert.deepEqual(findBall(case1), [1,-1,-1,-1,-1])
assert.deepEqual(findBall(case2), [-1])
assert.deepEqual(findBall(case3), [0,1,2,3,4,-1])

