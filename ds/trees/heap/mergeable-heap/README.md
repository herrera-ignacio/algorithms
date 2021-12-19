# Mergeable Heap

- [Mergeable Heap](#mergeable-heap)
  - [Definition](#definition)

## Definition

A *mergeable heap* is any data structure that supports the following five operations, in which each element has a *key*:

* $MAKE-HEAP()$: Creates and returns a new heap containing no elements.

* $INSERT(H, x)$: Inserts element *x*, whose *key* has already been filled in, into heap *H*.

* $MINIMUM(H)$: Returns a pointer to the element in heap *H* whose *key* is minimum.

* $EXTRACT-MIN$: Deletes the element from heap *H* whose *key* is minimum, returning a pointer to the element.

* $UNION(H_1, H_2)$: Creates and returns a new heap that contains all the elements of Heaps $H_1$ and $H_2$. Heaps $H_1$ and $H_2$ are "destroyed" by this operation.

> We are considering a *min* mergeable heap. Alternatively, we could define a mergeable *max* heap with the operation *MAXIMUM* and *EXTRACT-MAX*.
