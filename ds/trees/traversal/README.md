# Tree Traversal

- [Tree Traversal](#tree-traversal)
  - [Overview](#overview)
  - [Types](#types)
    - [Other types](#other-types)
  - [Data Structures for Tree Traversal](#data-structures-for-tree-traversal)

## Overview

_Tree traversal_ (also known as _tree search_ and _walking the tree_) is a form of graph traversal and refers to the process of visiting (e.g. retrieving, updating, or deleting) each node in a tree data structure, **exactly once**. Such traversals are classified by the order in which the nodes are visited.

## Types

Trees are mainly traversed in two ways:

* _depth-first_ (DFS): the search tree is deepened as much as possible before going to the next sibiling.
* _breadth-first_ (BFS): the search tree is broadened as much as possible before going to the next sibiling. 

### Other types

There are also tree traversal algorithms that classify as neither depth-first search nor breadth-first search.

One such algorithm is [Monte Carlo tree search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search), which concentrates on analyzing the most promising moves, basing the expansion of the search tree on _random sampling_ of the search space.

## Data Structures for Tree Traversal

Traversing a tree involves iterating over all nodes in some manner. Because from a given node there is more than one possible next node (it is not a linear data structure), then, assuming sequential computation (not parallel), some nodes must be deferred—stored in some way for later visiting. This is often done via a stack (_LIFO_) or queue (_FIFO_).

> _Depth-first search_ is easily implemented via a _stack_, including recursively (via the call stack), while _breadth-first search_ is easily implemented via a _queue_, including corecursively.
