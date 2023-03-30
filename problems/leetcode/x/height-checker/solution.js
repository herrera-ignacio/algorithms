// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/

function heightChecker(heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  const mismatches = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== heights[i]) {
      mismatches.push(i);
    }    
  }

  return mismatches.length;
}
