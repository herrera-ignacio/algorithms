# Mergeable Heap

- [Mergeable Heap](#mergeable-heap)
  - [Definition](#definition)

## Definition

Mergeable heaps (also known as _meldable heaps_) are a class of heap that support an additional operation:
__merging two heaps into one__.

> We are considering a *min* mergeable heap. Alternatively, we could define a mergeable *max* heap with the operation *MAXIMUM* and *EXTRACT-MAX*.

## Time complexity

The time complexity of the mergeable heaps' operations, including the additional __merge__ operation,
will depend on the type of heap used.

For example, if using Fibonacci heaps, merging complexity will be $O(1)$ as you only need to concatenate the root lists
of the two heaps. But, for binomial heaps, it would be $O(log n)$ as you'll need to combine trees.
