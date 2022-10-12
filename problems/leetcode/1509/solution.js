const assert = require('assert');
// https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/

/**
 * 1. Get the 4 smallest numbers O(4n)
 * 2. Get the 4 biggest numbers O(4n)
 * 3. Get the difference between the biggest and smallest numbers O(1)
 * 5th - 1th
 * 6th - 2th
 * 7th - 3th
 * 8th - 4th
 * This is because we can only "remove" 3 elements by changing them.
 * You can improve this by using a heap and get biggest and smallest numbers in O(8 * log n) time.
 */
function minDifference(arr) {
    if (arr.length <= 4) return 0;
    const smallest = findSmallestKth(arr);
    const biggest = findBiggestKth(arr);
    return Math.min(...[
      biggest[3] - smallest[0],
      biggest[2] - smallest[1],
      biggest[1] - smallest[2],
      biggest[0] - smallest[3]
    ])
}

/**
 * Time: O(k*n)
 * Space: O(n)
 */
const findSmallestKth = (arr) => {
  const tempArr = [...arr];
  const smallest = [Number.MAX_SAFE_INTEGER, 0, 0, 0]; // O(n)
  
  for (let k = 0; k < smallest.length; k++) {
    let smallestKthIdx = 0;

    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] < tempArr[smallestKthIdx]) {
        smallestKthIdx = i;
      }
    }

    smallest[k] = tempArr[smallestKthIdx];
    tempArr[smallestKthIdx] = Number.MAX_SAFE_INTEGER;
  }

  return smallest;
}

/**
 * Time: O(k*n)
 * Space: O(n)
 */
const findBiggestKth = (arr) => {
  const tempArr = [...arr];
  const biggest = [Number.MIN_SAFE_INTEGER, 0, 0, 0]; // O(n)

  for (let k = 0; k < biggest.length; k++) {
    let biggestKthIdx = 0;
    
    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] > tempArr[biggestKthIdx]) {
        biggestKthIdx = i;
      }
    }
    
    biggest[k] = tempArr[biggestKthIdx];
    tempArr[biggestKthIdx] = Number.MIN_SAFE_INTEGER;
  }

  return biggest;
}

assert.equal(minDifference([6,6,0,1,1,4,6]), 2);
assert.equal(minDifference([5,3,2,4]), 0);
