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

### Leetcode

- [X - Height Checker](problems/leetcode/x/height-checker)
- [12: Integer to roman](problems/leetcode/12)
- [21: Merge Two Sorted Lists](problems/leetcode/21)
- [26: Remove duplicates from sorted array](problems/leetcode/26)
- [27: Remove element](problems/leetcode/27)
- [36: Valid sudoku](problems/leetcode/36)
- [70: Climbing stairs](problems/leetcode/70)
- [76: Minimum window substring](problems/leetcode/76)
- [79: Word search](problems/leetcode/79)
- [88: Merge sorted array](problems/leetcode/88)
- [112: Path sum](problems/leetcode/112)
- [151: Reverse words in a string](problems/leetcode/151)
- [208 Implement Trie (Prefix Tree)](problems/leetcode/208)
- [212: Word Search II](problems/leetcode/212)
- [219: Contains duplicate II](problems/leetcode/219)
- [222: Count complete tree nodes](problems/leetcode/222)
- [223: Rectangle area](problems/leetcode/223)
- [224: Basic calculator](problems/leetcode/224)
- [231: Power of two](problems/leetcode/231)
- [237: Delete node in a linked list](problems/leetcode/237)
- [263: Ugly number](problems/leetcode/263)
- [279: Perfect squares](problems/leetcode/279)
- [283: Move Zeroes](problems/leetcode/283)
- [342: Power of four](problems/leetcode/342)
- [345: Reverse vowels of a string](problems/leetcode/345)
- [374: Guess number higher or lower](problems/leetcode/374)
- [380: Insert Delete GetRandom O(1)](problems/leetcode/380)
- [414: Third maximum number](problems/leetcode/414)
- [433: Minimum genetic mutation](problems/leetcode/433)
- [448: Find all numbers disappeared in an array](problems/leetcode/448) 
- [455: Assign cookies](problems/leetcode/455)
- [485: Max consecutive ones](problems/leetcode/485)
- [487: Max consecutive ones II](problems/leetcode/487)
- [515: Find largest value in each tree row](problems/leetcode/515)
- [532: Continuous subarray sum](problems/leetcode/532)
- [587: Erect the fence](problems/leetcode/587)
- [645: Set mismatch](problems/leetcode/645)
- [766: Toeplitz matrix](problems/leetcode/766)
- [779: K-th symbol in grammer](problems/leetcode/779)
- [823: Binary trees with factors](problems/leetcode/823)
- [872: Leaf-similar trees](problems/leetcode/872)
- [899: Orderly queue](problems/leetcode/899)
- [901: Stock plan](problems/leetcode/901)
- [905: Sort array by parity](problems/leetcode/905)
- [907: Sum of subarray minimums](problems/leetcode/907)
- [931: Minimum falling path sum](problems/leetcode/931)
- [938: Range sum of BST](problems/leetcode/938)
- [941: Valid mountain array](problems/leetcode/941)
- [947 - Most stones removed with same row or column](problems/leetcode/947)
- [976: Largest perimeter triangle](problems/leetcode/976)
- [977: Squares of a sorted array](problems/leetcode/977)
- [1137: N-th Tribonacci number](problems/leetcode/1137)
- [1047: Remove all adjacent duplicates in a string](problems/leetcode/1047)
- [1066: Campus bikes II](problems/leetcode/1066)
- [1089: Duplicate Zeros](problems/leetcode/1089)
- [1198: Find smallest common element in all rows](problems/leetcode/1198)
- [1208: Unique number of occurrences](problems/leetcode/1208)
- [1026: Maximum difference between node and ancestor](problems/leetcode/1026)
- [1235: Maximum profit in job scheduling](problems/leetcode/1235)
- [1239: Maximum length of a concatenated string with unique characters](problems/leetcode/1239)
- [1323: Maximum 69 number](problems/leetcode/1323)
- [1356: Sort integers by the number of bits with value 1](problems/leetcode/1356)
- [1509: Minimum difference between largest and smallest value in three moves](problems/leetcode/1509)
- [1530: NUmber of Good Leaf Nodes Pairs](problems/leetcode/1530)
- [1544: Make the string great](problems/leetcode/1544)
- [1704: Determine if string halves are alike](problems/leetcode/1704)
- [1706: Where will the ball fall](problems/leetcode/1706)
- [1832: Check if the sentence is anagram](problems/leetcode/1832)
- [1926: Nearest exit from entrance in maze](problems/leetcode/1926)
- [2095: Delete the middle node of a linked list](problems/leetcode/2095)
- [2125: Number of laser beams in a bank](problems/leetcode/2125)
- [2131: Longest palindrome by concatenating two-letter words](problems/leetcode/2131)
- [2225: Find players with zero or one losses](problems/leetcode/2225)
- [2385: Amount of time for binary tree to be infected](problems/leetcode/2385)
- [2610: Convert an array into a 2d array with conditions](problems/leetcode/2610)
- [2870: Minimum number of operations to make array empty](problems/leetcode/2870)
