# Maximum subarray problem

## Overview

The maximum subarray problem is the problem of finding the maximum sum of a contiguous subsequence in an array or list of numbers. Each number could be positive, negative, or zero.

Formally, the task is to find indices $i$ and $j$ such that $1 \leq i \leq j \leq n$, such that the sum $\sum_{x = i}^{j}x$ is as large as possible.

Some properties of this problem:

1. If the array contains all non-negative numbers, then the problem is trivial; a maximum subarray is the entire array.
2. If the array contains all non-positive numbers, then a solution is any subarray of size 1 containing the maximal value of the array (or the empty subarray, if it is permited).
3. Several different sub-arrays may have the same maximum sum.

## Applications

- _Genomic sequence analysis_ employs maximum-subarray algorithms to identify important biological segments of protein sequences. These problems include conserved segments, GC-rich regions, tandem repeats, low-compelxity filter, DNA binding domains, and regions of high charge.
- In _computer vision_, maximum-subarray algorithms are used on bitmap images to detect the brightest area in an image.

## Algorithms

- [Kadane's algorithm](../problem-specific/kadane.md) $(O(n)$
