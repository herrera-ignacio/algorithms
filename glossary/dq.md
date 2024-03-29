# Divide and Conquer

- [Divide and Conquer](#divide-and-conquer)
  - [Overview](#overview)
  - [Variations](#variations)

## Overview

Break the problem into several subproblems that are similar to the original proble but smaller in size, solve the subproblems recursively, and then combine these solutions to create a solution to the original problem.

1. __Divide__ the problem into a number of subproblems that are smaller instances of the same problem.

2. __Conquer__ subproblems by solving them recursively. If the subproblem sizes are small enough, however, just solve the subproblems in a straightforward manner.

3. __Combine__ solutions to subproblems into the solution for the original problem.

## Variations

When combined with a _lookup table_ that stores the results of previously solved sub-problems to avoid solving them repeatedly, it can be referred to as [_dynamic programming_](./dynamic-programming/README.md) or _memoization_.

