const minFallingPathSum = matrix => {
  let minFallingSum = Number.MAX_SAFE_INTEGER;
  const memo = new Array(matrix.length).fill(undefined)
    .map(() => new Array(matrix[0].length).fill(undefined));

  // Start a DFS + memoization from each cell in the first row
  for (let startCol = 0; startCol < matrix.length; startCol++) {
    minFallingSum = Math.min(
      minFallingSum,
      findMinFallingPathSum(matrix, 0, startCol, memo)
    );
  }

  return minFallingSum;
}

const findMinFallingPathSum = (matrix, row, col, memo) => {
  // Base case 1: col out of bounds
  if (col < 0 || col >= matrix[0].length) {
    return Number.MAX_SAFE_INTEGER;
  }

  // Base case 2: reached the last row
  if (row === matrix.length - 1) {
    return matrix[row][col];
  }

  // Base case 3: memoized sub-problem
  if (memo[row][col] !== undefined) {
    return memo[row][col];
  }

  const left = findMinFallingPathSum(matrix, row + 1, col, memo);
  const middle = findMinFallingPathSum(matrix, row + 1, col + 1, memo);
  const right = findMinFallingPathSum(matrix, row + 1, col - 1, memo);

  memo[row][col] = Math.min(left, Math.min(middle, right)) + matrix[row][col];
  
  return memo[row][col];
}
