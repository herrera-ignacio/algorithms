// 947 https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/

/**
 * 
 * @param {number[][]} stones 
 * @return {number}
 */
function removeStones(stones) {
  const adj = new Array(stones.length).fill(0).map(_ => new Array());
  const visited = new Array(stones.length).fill(0);

  for (let i = 0; i < stones.length; i++) {
    for (let j = i + 1; j < stones.length; j++) {
      if (areAdjacent(stones[i], stones[j])) {
        // console.log(stones[i], stones[j])
        adj[i].push(j);
        adj[j].push(i);
        console.log(adj);
      }
    }
  }

  // Counter of connected components
  let componentCount = 0;
  for (let i = 0; i < stones.length; i++) {
    if (visited[i] === 0) {
      componentCount++;
      dfs(stones, adj, visited, i);
    }
  }

  // Maximum stones that can be removed
  return stones.length - componentCount;
}

/**
 * 
 * @param {number[]} stone1 
 * @param {number[]} stone2 
 */
function areAdjacent(stone1, stone2) {
  return stone1[0] === stone2[0] || stone1[1] === stone2[1];
}

function dfs(stones, adj, visited, stoneNum) {
  // Mark the stone as visited
  visited[stoneNum] = 1;

  // Iterate over the adjacent and dfs if not visited yet
  for (let s of adj[stoneNum]) {
    if (visited[s] === 0) {
      dfs(stones, adj, visited, s);
    }
  }
}

removeStones([[3,2],[3,1],[4,4],[1,1],[0,2],[4,0]]);

// [0, x, 0, 0]
// [0, x, 0, 0]
// [0, 0, 0, 0]
// [0, x, x, 0]
// [x, 0, 0, x]
