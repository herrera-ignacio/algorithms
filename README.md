# Algorithms & Data Structures

- [Algorithms \& Data Structures](#algorithms--data-structures)
    - [Data Structures](#data-structures)
        - [Time complexity](#time-complexity)
        - [Types](#types)
        - [Language-specific complexity](#language-specific-complexity)
    - [Algorithm Design](#algorithm-design)
    - [Algorithms](#algorithms)
        - [Mathematics](#mathematics)
        - [Cryptography](#cryptography)
        - [Graph](#graph)
        - [Medians and Order Statistics](#medians-and-order-statistics)
        - [Problem-specific](#problem-specific)
        - [Rate Limiting](#rate-limiting)
        - [Searching](#searching)
        - [Sorting](#sorting)
    - [Solved problems](#solved-problems)
        - [Well-known](#well-known)
        - [Others](#others)
    - [Coding platforms](#coding-platforms)
        - [Leetcode](#leetcode)

## [Data Structures](ds)

| Data Structure              | Subtype / Implementation                               | Reading               | Insertion             | Deletion             | Note                                                                                                                                                                 |
|:----------------------------|:-------------------------------------------------------|-----------------------|-----------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Array](ds/linear/array)    | -                                                      | $O(1)$                | $O(n)$                | $O(n)$               | Allows random access.                                                                                                                                                |
| List                        |                                                        |                       |                       |                      |                                                                                                                                                                      |
|                             | [Linked list](ds/linear/linked-list)                   | $O(n)$                | $O(1)$                | $O(1)$               | Each node has a pointer to the next one.                                                                                                                             |
|                             | [Doubly linked list](ds/linear/linked-list/doubly)     | $O(n)$                | $O(1)$                | $O(1)$               | Each node has a pointer to the next and previous one.                                                                                                                |
|                             | [Circular linked list](ds/linear/linked-list/circular) | $O(n)$                | $O(1)$                | $O(1)$               | Head and tail are linked.                                                                                                                                            |
| [Hash Table](ds/hash-table) | -                                                      | $O(1)$                | $O(1)$                | $O(1)$               | Assuming a good hash function is used and the table is not too full. In the worst case, where many collisions happen, time complexity can be $O(n)$.                 |
| Set                         | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |
|                             | Using hash tables.                                     | $O(1)                 | $O(1)$                | $O(1)$               | The worst-case of some operations, such as finding the maximum or minimum element, can be O(n) if the implementation does not keep track of these values separately. |
|                             | Using BST such as AVL, red-black, or splay tree.       | $O(log\ n)$           | $O(log\ n)$           | $O(log\ n)$          | ^                                                                                                                                                                    |
| [Stack](ds/linear/stack)    | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |
|                             | Using linked lists.                                    | $O(1)$ (Last)         | $O(1)$ (Push)         | $O(1)$ (Pop)         | The time complexity of the basic operations (LIFO) is constant, regardless of the number of elements.                                                                |
|                             | Using fixed-size arrays.                               | $O(1)$ (Last)         | $O(n)$ (Push)         | $O(1)$ (Pop)         | Insertion may be proportional to the size of the Stack if an new array allocation is needed.                                                                         |
| [Queue](ds/linear/queue)    | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |
|                             | Using linked lists.                                    | $O(1)$ (First)        | $O(1)$ (Enqueue)      | $O(1)$ (Dequeue)     | The time complexity of the basic operations (FIFO) is constant, regardless of the number of elements.                                                                |
|                             | [Priority Queue](ds/linear/queue/priority-queue)       | $O(1)$ (First)        | $O(log\ n)$ (Enqueue) | $O(1)$ (Dequeue)     | Using a Binary Heap, we can get the element with highest priority in $O(1)$ and insertions in $O(log\ n)$.                                                           |
| Tree                        | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |
|                             | [Binary Tree](ds/trees/binary-tree)                    | $O(n)$                | $O(n)$                | $O(n)$               |                                                                                                                                                                      |
|                             | [Binary Search Tree](ds/trees/bst)                     | $O(log n)$ (average)  | $O(log n)$ (average)  | $O(log n)$ (average) | Worst case is $O(n)$ when BST is a linear chain of $n$ nodes.                                                                                                        |
|                             | [Red-Black Tree](ds/trees/red-black-tree)              | $O(log n)$            | $O(log n)$            | $O(log n)$           | Self-balancing guarantees the height of the tree to remain logarithmic with respect to the number of keys.                                                           |
|                             | [Trie (Prefix tree)](ds/trees/trie)                    | $O(m)$                | $O(m)$                | $O(m)$               | Where $m$ is the length of the string.                                                                                                                               |
|                             | [B-Trees](ds/trees/b-trees)                            | $O(log n)$            | $O(log n)$            | $O(log n)$           | The height of the three remains logarithmic with respect to the number of keys.                                                                                      |
|                             | [Interval Tree](ds/trees/interval-tree)                | $O(log n + k)$        | $O(log n + k)$        | $O(log n + k)$       | Where $k$ is the number of intervals.                                                                                                                                |
|                             | [M-ary / K-ary Trees](ds/trees/m-ary)                  | $O(log_m n)$          | $O(log_m n)$          | $O(log_m n)$         | Assumes the tree is balanced but in practice, the performance can vary depending on many factors.                                                                    |
|                             | [Order-Statistic Tree](ds/trees/order-statistic-tree)  | $O(log n)$            | $O(log n)$            | $O(log n)$           | It's an specialized Red-Black Tree and therefore, self-balanced.                                                                                                     |
|                             | [Van Emde Boas Tree](ds/trees/van-emde-boas)           | $O(log log n)$        | $O(log log n)$        | $O(log log n)$       |                                                                                                                                                                      |
| Heaps                       | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |
|                             | [Binary Min/Max Heap](ds/trees/heap/binary-heap)       | $O(1)$ (peek min/max) | $O(log n)$            | $O(log n)$           |                                                                                                                                                                      |
|                             | [Mergeable Heap](ds/trees/heap/mergeable-heap)         | -                     | -                     | -                    | The time complexity of the basic operations will depend on the underlying heap implementation regardless of the added "merge" operation.                             |
|                             | [Fibonacci Heap](ds/trees/heap/fibonacci)              | $O(1)$                | $O(1)$ amortized      | $O(log n)$ amortized |                                                                                                                                                                      |
| [Graph](graph)              | -                                                      | -                     | -                     | -                    | -                                                                                                                                                                    |

> This is only a high-level overview of base implementations. Usually, you'd be able to optimize data structures for
> specific use cases by making some assumptions and tweaks.

- [JavaScript data structures and complexities](languages/js/README.md)

## Algorithm Design

- [Amortized Analysis](glossary/amortized-analysis/README.md)
- [Divide and Conquer](glossary/dq.md)
- [Recursion](glossary/recursion.md)
- [Dynamic Programming](glossary/dynamic-programming/README.md)
- [Greedy Algorithms](glossary/greedy-algorithms)
- [Probabilistic Analysis](glossary/probabilistic-analysis.md)
- [Randomized Algorithm](glossary/randomized-algo.md)
- [NP-complete problems](glossary/np-complete/README.md)

## Algorithms

### Mathematics

- [Greatest common divisor (GCD): Euclidean algorithm](maths/euclidean)

### Cryptography

- [Caesar Cipher](crypto/caesar)

### [Graph](graph)

- [Breadth-first search](graph/bfs)
- [Depth-first search](graph/dfs)
- [Dijkstra's algorithm](graph/dijkstra)
- Minimum Spanning Trees
    - Kruskal's algorithm
    - Prim's algorithm
- Single-Source Shortest Paths
    - The Bellman-Ford algorithm
    - Dijkstra's algorithm
- All-Pairs Shortest Paths
    - Floyd-Warshall algorithm
    - Johnson's algorithm for sparse graphs
- Maximum Flow
    - Ford-Fulkerson method
    - Edmonds-Karp algorithm
    - Push-relabel algorithms
    - Relabel-to-front algorithm

### [Medians and Order Statistics](statistics)

- [Minimum and maximum](statistics/min-max)
- [Randomized Selection](statistics/randomized-selection)

### Problem-specific

- [Kadane's algorithm](problem-specific/kadane.md)

### [Rate Limiting](rate-limiting/README.md)

- [Token Bucket](rate-limiting/token-bucket)
- [Leaking Bucket](rate-limiting/leaking-bucket)
- [Fixed Window Counter](rate-limiting/fixed-window-counter)
- [Sliding Window Log](rate-limiting/sliding-window-log)
- [Sliding Window Counter](rate-limiting/sliding-window-counter)

### Searching and traversal

> [What is a Tree Traversal?](ds/trees/traversal/README.md)

| Algorithm                                                   | Time             | Space  | Notes |
|-------------------------------------------------------------|------------------|--------|-------|
| [DFS: Depth-first search](ds/trees/traversal/dfs/README.md) | $O(\|V\|+\|E\|)$ | $O(1)$ |       |
| [BFS: Breadth-first search](graph/bfs/README.md)            | $O(\|V\|+\|E\|)$ | $O(1)$ |       |
| [Binary search](searching/binary-search/README.md)          | $O(log_2 n)$     | $O(1)$ |       |

### [Sorting](sorting/README.md)

| Algorithm                                | Time                                      | Space       | Stable                                                       |                                                                                                  |
|------------------------------------------|-------------------------------------------|-------------|--------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [Selection sort](sorting/selection_sort) | $O(n^2)$                                  | $O(1)$      | No                                                           |                                                                                                  |
| [Insertion sort](sorting/insertion_sort) | $O(n^2)$                                  | $O(1)$      | Yes                                                          |                                                                                                  |
| [Mergesort](sorting/mergesort)           | $O(n\ log\ n)$                            | $O(1)$      | Yes                                                          |                                                                                                  |
| [Heapsort](sorting/heapsort)             | $O(n\ log\ n)$                            | $O(1)$      | No                                                           |                                                                                                  |
| [Quicksort](sorting/quicksort)           | $O(n^2)$ worst and $O(n\ log\ n)$ average | $O(log(n))$ | No                                                           |                                                                                                  |
| [Counting sort](sorting/counting_sort)   | $O(n)$                                    | $O(k)$      | No                                                           | Where $k$ is the largest element in the array                                                    |
| [Radix sort](sorting/radix_sort)         | $O(d*(n+k)$                               | $O(n+k)$    | Yes                                                          | Where $d$ is the number of digits in the longest number and $k$ the base (e.g., 10 for decimals) |
| [Bucket sort](sorting/bucket_sort)       | $O(n^2)$ worst and $O(n+k)$ average       | $O(n+k)$    | Yes (if stable sorting algorithm is used within the buckets) | Where $k$ is the number of buckets.                                                              |
| [Random permutations](sorting/randomly)  | -                                         | -           | -                                                            | Complexities will depend on whether it uses some sort of priority and comparison sort or not.    |

## Solved problems

### Well-known

- [Knapsack](problems/knapsack/README.md)
- [Activity Selection](problems/activity-selection)
- [Classroom scheduling](problems/classroom-scheduling/README.md)
- [Hiring Problem](problems/hiring)
- [Huffman Codes](problems/huffman-codes)
- [Longest common substring](problems/longest-common-substring/README.md)
- [Longest common subsequence](problems/lcs)
- [Matrix Chain Multiplication](problems/matrix-chain-mult)
- [Maximum subarray problem](problems/maximum-subarray-problem/README.md)
- [Revenue Recognition](problems/revenue-recognition)
- [Rod Cutting](problems/rod-cutting)
- [Set-covering problem](problems/set-covering/README.md)

### By Data Structure

#### Lists

- [Reverse a string](problems/others/lists/reverse-a-string)
- [Squares of a sorted array](problems/others/lists/squares-of-a-sorted-array)
- [Round-robin array of iterators](problems/others/round-robin-iterators/README.md)

## Coding platforms

- [Leetcode challenges](https://github.com/herrera-ignacio/leetcode)
