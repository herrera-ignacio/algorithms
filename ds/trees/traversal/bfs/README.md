# Breadth-first Search

- [Breadth-first Search](#breadth-first-search)
  - [Overview](#overview)
  - [Technical details](#technical-details)
    - [Time and space complexity](#time-and-space-complexity)
      - [Complexity in trees](#complexity-in-trees)
  - [Implementation](#implementation)
    - [Tree: iterative implementation](#tree-iterative-implementation)
  - [Use cases](#use-cases)
    - [Maze-solving](#maze-solving)
    - [Chess endgame](#chess-endgame)

## Overview

In BFS or _level-order search_, . It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level.

Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.

> The search tree is **broadened as much as possible** before going to the next depth.

![](Animated_BFS.gif)

> Level order: F, B, G, A, D, I, C, E, H.

## Technical details

### Time and space complexity

The time complexity can be expressed as $O(|V| + |E|)$, since every vertex $V$ and every edge $E$ will be explored in the worst case.

> Note that $O(|E|)$ may vary between $O(1)$ and $O(|V|^2)$, depending on how sparse the input graph is.

When additional data structures are used to determine which vertices have already been added to the queue, the space complexity can be expressed as $O(|V|)$.

#### Complexity in trees

> Refer to this [SO post](https://stackoverflow.com/questions/64657483/time-complexity-of-bfs-and-dfs-on-a-binarytree-why-on).

In case the graph is a tree, then the number of edges is $|V| - 1$. Therefore, the time complexity is $O(|V|)$ because $O(|V| + |E|) = O(|V| + |V| - 1)$.

## Implementation

### Tree: iterative implementation

```pseudo
procedure BFS(T, root)
    let Q be queue
    label root as visited
    Q.enqueue(root)

    while Q is not empty
        v = Q.dequeue()

        // Some logic with v here

        if v is the end
          return v

        for all edges from v to w in T.adjacentEdges(v) do
            // For a binary tree, those are the left and right children
            if edge is not visited
                label edge as visited
                Q.enqueue(edge)
```

1. It uses a _queue_ (FIFO).
2. It checks whether a vertex has been explored before enqueing it.

If $G$ is a tree, replacing the queue with a stack will yield a DFS algorithm.

## Use cases

BFS can be used to solve many problems in graph theory, for example:

- [Cheney's algorithm (Tracing garbage collection)](https://en.wikipedia.org/wiki/Cheney%27s_algorithm)
- Find the shortest path between two nodes.
- Serialization/deserialization of a binary tree vs serialization in sorted order, allows the tree to be re-constructed in an efficient manner.
- Testing bipartiteness of a graph.
- Parallel algorithms for computing a graph's transitive closure.

### Maze-solving

> It is use in the [Maze-solving algorithm](https://en.wikipedia.org/wiki/Maze-solving_algorithm).

![Maze](BFS-Algorithm_Search_Way.gif)

### Chess endgame

In a [chess endgame](https://en.wikipedia.org/wiki/Chess_endgame), a chess engine may build the game tree from the current position by applying all possible moves, and use BFS to find a win position for white.

In contrast, (plain) DFS explores the node branch as far as possible before backtracking and expanding other nodes, may get lost in an infinite branch and never make it to the solution node.

> On the other hand, DFS algorithms get along without extra memory.
