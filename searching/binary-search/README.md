# Binary Search

> Also known as _logarithmic search_ or _half-interval search_.

- [Binary Search](#binary-search)
  - [Overview](#overview)
  - [Complexity](#complexity)
  - [Use cases](#use-cases)
  - [Variations](#variations)

## Overview

Binary search __compares the target value to the middle element of the array__. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Complexity

BS runs in $O(\log n)$ time, making $n$ comparisons, where $n$ is the number of elements in the array. BS is a dichotomous __divide and conquer algorithm__.

## Use cases

There are specialized data structures designed for fast searching, such as _hash tables_, that can be searched more efficiently than binary search.

However, binary search can be used to solve a wider range of problems, such as:

- Finding the next-smallest or next-largest element in the array relative to the target even if it is absent from the array.
- Finding the smallest and largest element.

## Variations

- _Fractional cascading_ speeds up binary searches for the same value in multiple arrays. It efficiently solves a number of search problems in computational geometry.
- _Exponential search) extends binary search to unbounded lists.
- _Binary search tree_ and _B-tree_ data sturctures are based on binary search.
