// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/

/**
 * 
 * @param {string[][]} maze 
 * @param {number[]} entrance [row, col] 
 * @return {number} steps in the shortest path from the entrance to the nearest exit or -1.
 */
function nearestExit(maze, entrance) {
  const moves = [[0,1], [0,-1], [1,0], [-1,0]];
  const queue = new Queue([entrance]);
  const steps = { [getCellStringKey(entrance)]: 1 };

  while (queue.size() > 0) {
    let cell = queue.dequeue();
    let cellKey = getCellStringKey(cell);

    // We only enqueued empty cells
    if (isExit(cell, maze) && steps[cellKey] > 1) {
      return steps[cellKey] - 1;
    }

    // Attempt x and y moves
    for (let move of moves) {
      let newCell = [cell[0] + move[0], cell[1] + move[1]];

      // Check if we are inside the maze
      if (isInsideMaze(newCell, maze)) {
        let newCellKey = getCellStringKey(newCell);

        // Check if cell was not visited before
        if (!steps[newCellKey]) {
          steps[newCellKey] = steps[cellKey] + 1;

          if (isEmptyCell(newCell, maze)) {
            queue.enqueue(newCell);
          }
        }
      }
    }
  }

  // If we got here, no exit
  return -1;
};

function isInsideMaze(cell, maze) {
  return cell[0] >= 0 && cell[0] <= maze.length - 1 && cell[1] >= 0 && cell[1] <= maze[0].length - 1;
}

function isExit(cell, maze) {
  return cell[0] === 0 || cell[0] === maze.length - 1 || cell[1] === 0 || cell[1] === maze[0].length - 1;
}

function isEmptyCell(cell, maze) {
  return maze[cell[0]][cell[1]] === '.';
}

const getCellStringKey = cell => `${cell[0]},${cell[1]}`;
