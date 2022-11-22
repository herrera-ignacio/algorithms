// https://leetcode.com/problems/perfect-squares/description/
// https://leetcode.com/problems/perfect-squares/solutions/406607/perfect-squares/

/**
 * 
 * @param {number} n 
 * @return {number}
 */
function numSquares(n) {
  const squares = getPerfectSquaresUpTo(n);

  // BFS will try to expand the level as much as possible
  // before continuing exploring a branch.
  // Therefore, once we find a solution, we know we are on
  // the minimal level (i.e. distance from root).
  let level = 0;

  // https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-
  // Leetcode provides datastructures-js/queue
  let queue = new Queue([n])

  while (queue.size() > 0) {
      level++;

      // Use set to avoid redundancy
      const nextLevel = new Set();

      // For each reminder of the queue
      while (queue.size() > 0) {
        const remainder = queue.dequeue();
        for (let square of squares) {
          // If it is a square number, we finished
          if (remainder === square) {
            // We know it's the min level because of BFS
            return level;
          }
          // Else check if we substraction is positive
          else if (remainder > square) {
            // Add new reminder to the next level to explore
            nextLevel.add(remainder - square);
          }
        }
      }

      // Prepare to explore next level
      queue = Queue.fromArray(Array.from(nextLevel));
  }

  // There's always a solution
  return level;
}

/**
 * 
 * @param {number} n 
 * @returns {number[]} list of perfect squares up to n
 */
function getPerfectSquaresUpTo(n) {
  const squares = new Array(Math.floor(Math.sqrt(n))).fill();
  return squares.map((_, idx) => (idx+1)**2);
}

