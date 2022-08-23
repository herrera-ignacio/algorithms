# Kadane's algorithm

[Joseph Born Kadane](https://en.wikipedia.org/wiki/Joseph_Born_Kadane) solves [the maximum subarray problem](../problems/maximum-subarray-problem/README.md).

- [Kadane's algorithm](#kadanes-algorithm)
  - [Variants](#variants)
    - [Original: Empty subarrays admitted](#original-empty-subarrays-admitted)
    - [No empty subarrays admitted](#no-empty-subarrays-admitted)
    - [Computing the best subarray's position](#computing-the-best-subarrays-position)
  - [Complexity](#complexity)

## Variants

### Original: Empty subarrays admitted

Kadane's original algorithm solves the problem version when empty subarrays are admitted. It scans the array $A[i...n]$ from left to right. In the $j_{th}$ iteration, it computes the subarray with the largest sum ending at $j$ (i.e., `currentSum`). Moreover, it computes the subarray with the largest sum anywhere in $A[i...j]$ as the maximum of all values of `currentSum` seen so far.

```javascript
function maxSubarray(A) {
  let bestSum = 0;
  let currentSum = 0;

  for (const x of A) {
    currentSum = Math.max(0, currentSum + x);
    bestSum = Math.max(bestSum, currentSum);
  }
   
  return bestSum;
}
```

### No empty subarrays admitted

For this variant of the problem, `bestSum` should be initialized to negative infinity instead. Also, the current sum computation should be updated so that if the input contains no positive element, the returned value is that of the largest element, or negative infinity if the input was empty.

```javascript
function maxSubarray(A) {
  if (A.length === 0) {
    throw new Error('Empty array has no non-empty subarrays');
  }

  let bestSum = Math.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (const x of A) {
    currentSum = Math.max(x, currentSum + x);
    bestSum = Math.max(bestSum, currentSum);
  }
  
  return bestSum;
}
```

### Computing the best subarray's position

The algorithm can be extended to keep track of the starting and ending indices of the maximum subarray as well.

```javascript
function maxSubarray(A) {
  let bestSum = 0;
  let bestStart = 0;
  let bestEnd = 0;
  let currentSum = 0;
  let currentStart = 0;

  for (let currentEnd = 0; i < A.length; i++) {
    if (currentSum <= 0) {
      // Start a new sequence at the current element  
      currentStart = currentEnd;
      currentSum = A[currentEnd];
    } else {
      // Extend the existing sequence with the current element
      currentSum += A[currentEnd];
    }

    if (currentSum > bestSum) {
      bestSum = currentSum;
      bestStart = currentStart;
      bestEnd = currentEnd;
    }
  }

  return [bestSum, currentStart, currentEnd];
}
```

## Complexity

The runtime complexity of Kadane's algorithm is $O(n)$. It can be viewed as a simple/trivial example of [dynamic programming](../glossary/dynamic-programming/README.md) because the way this algorithm uses optimizal substructures: the maximum subarray ending at each position is calculated in a simple way from a related but smaller and overlapping subproblem (the maximum subarray ending at the previous position).
