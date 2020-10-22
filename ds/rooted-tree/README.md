# Rooted Tree

## Binary Trees

We use the attributes `p`, `left` and `right`, to store pointers to the parent, left child and right child of each node in a binary tree T. If `x.p == NIL`, then x is the root. The root of the entire tree T is pointed to by the attribute `T.root`.

## Rooted trees with unbounded branching.

We can represent any class of trees in which the number of children of each node is at most some constant k.

We replace `left` and `right` attributes by `child_1, ..., child_k`. This scheme no longer works when the number of children of a node is onbounded, since we do not know how many attributes to allocate in advance. Moreover, even if the number of children k is bounded by a large constant, but most nodes have a small number of children, we may waste a lot of memory.

Fortunately, there is a clever sxheme to represent trees with arbitrary numbers of children, using only O(n) space for any n-node rooted tree.

Each node contains a parent pointer `p`, and `T.root` points to the orot of tree T. Instead of having a pointer to each children, however, each node x has only two pointers:

1. `x.left-child` points to the leftmost child of node x
2. `x.right-sibiling` points to the sibling of x immediately to its right.
