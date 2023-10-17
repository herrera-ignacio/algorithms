# Dynamic Programming

- [Dynamic Programming](#dynamic-programming)
  - [Overview](#overview)
  - [When to use it?](#when-to-use-it)
  - [Design Process](#design-process)
    - [Approach 1: Top-Down with Memoization](#approach-1-top-down-with-memoization)
    - [Approach 2: Bottom-Up](#approach-2-bottom-up)
  - [Use cases \& examples](#use-cases--examples)

## Overview

> Recommended example: the [Knapsack Problem](../../problems/knapsack/README.md).

Divide-and-conquer algorithms partition the problem into disjoint sub-problems, solve the sub-problems recursively, and then combine their solutions to solve the original problem. In contrast, __dynamic programming__ applies when the __sub-problems overlap__. It saves sub-problems' answers in a table, thereby avoiding the work of recomputing the answer. Dynamic programming thus __uses additional memory to save computation time__. The savings may be dramatic, an exponential-time solution may be transformed into a polynomial-time solution.

A dynamic-programming approach runs in polynomial time when the number of _distinct_ sub-problems involved is polynomial in the input size and we can solve each such subproblem in polynomial time.

Dynamic Programming typically applies to optimization problems in which we make a set of choices in order to arrive at an optimal solution. As we make each choice, sub-problems of the same form often arise.

## When to use it?

- You're trying to optimize something given a constraint.
- Problems that can be broken into discrete sub-problems (they don't depend on each other).

## Design Process

When developing a dynamic-programming algorithm, we follow a sequence of four steps:

1. Characterize the structure of an optimal solution.

2. Recursively define the value of an optimal solution.

3. Compute the value of an optimal solution, typically in a bottom-up fashion.

4. Construct an optimal solution from computed information.

We usually have two equivalent ways to implement a dynamic-programming approach. These two approaches yield algorithms with the same asymptotic running time, except in unusual circumstances where the top-down approach does not actually recurse to examine all possible sub-problems. The bottom-up approach often has much better constant factors, since it has less overhead for procedure calls.

### Approach 1: Top-Down with Memoization

In this approach, we write the procedure recursively in a natural manner, but modified to save the result of each subproblem. The procedure now first checks to see whether it has previously solved this subproblem. If so, it returns the value, saving further computation at this level.

### Approach 2: Bottom-Up

This approach typically depends on some natural notion of the "size" of a subproblem, such that solving any particular subproblem depends only on solving "smaller" sub-problems. We sort the sub-problems by size and solve them in size order, smallest first, thus following a natural ordering of the sub-problems (0..n).

When solving a particular subproblem, we have already solved all of the smaller sub-problems its solution depends upon, and we have saved their solution. We solve each subproblem only once, and when we first see it, we have already solved all of its prerequisite sub-problems.

## Use cases & examples

- [Knapsack Problem](../../problems/knapsack/README.md).
- [Longest common subsequence](../../problems/lcs) (e.g., find similarities in DNA strands).
- [Longest common substring](../../problems/longest-common-substring/).
- `git diff`.
- [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) measures how similar two strings are and has many use cases like spell-checking or identifying copyrighted data.
- Apps that do word wrap (e.g., Microsoft Word).
