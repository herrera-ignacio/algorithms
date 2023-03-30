# Algorithms & Data Structures

- [Data Structures](#data-structures)
  - [Time complexity](#time-complexity)
  - [Types](#types)
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
- [Language data structures complexity](#language-data-structures-complexity)
- [Coding platforms](#coding-platforms)
  - [Leetcode](#leetcode)

## [Data Structures](ds)

### Time complexity

| Data Structure | Reading | Insertion | Deletion |
|----------------|---------|-----------|----------|
| Array          | $O(1)$  | $O(n)$    | $O(n)$   |
| List           | $O(n)$  | $O(1)$    | $O(1)$   |

> This is only a high-level overview of base implementations. Usually, you'd be able to optimize data structures for specific use cases by making some assumptions and tweaks.

### Types

- [Array](ds/linear/array)
- [Hash Table](ds/hash-table)
- [Linked List](ds/linear/linked-list)
  - [Doubly Linked List](ds/linear/linked-list/doubly)
  - [Circular Linked List](ds/linear/linked-list/circular)
- [Set](ds/set)
- [Stack](ds/linear/stack)
- Tree
  - [Binary Search Tree](ds/trees/bst)
  - [Binary Tree](ds/trees/binary-tree)
  - [Trie (Prefix tree)](ds/trees/trie)
  - [B-T](ds/trees/b-trees)
  - Heaps
    - [Binary Heap (Min/Max Heap)](ds/trees/heap/binary-heap)
    - [Mergeable Heap](ds/trees/heap/mergeable-heap)
  - [Interval Tree](ds/trees/interval-tree)
  - [M-ary / K-ary Trees](ds/trees/m-ary)
  - [Order-Statistic Tree](ds/trees/order-statistic-tree)
  - [Red-Black Tree](ds/trees/red-black-tree)
  - [Rooted Trees](ds/trees)
  - [Van Emde Boas Trees](ds/trees/van-emde-boas)
- [Queue](ds/linear/queue)
  - [Priority Queue](ds/linear/queue/priority-queue)

## Algorithm Design

- [Amortized Analysis](glossary/amortized-analysis/README.md)
- [Divide and Conquer](glossary/dq.md)
- [Recursion](glossary/recursion.md)
- [Dynamic Programming](glossary/dynamic-programming/README.md)
- [Greedy Algorithms](glossary/greedy-algorithms)
- [Probablisitic Analysis](glossary/probabilistic-analysis.md)
- [Randomized Algorithm](glossary/randomized-algo.md)

## Algorithms

### Mathematics

- [Greatest common divisor (GCD): Euclidean algorithm](maths/euclidean)

### Cryptography

- [Caesar Cipher](crypto/caesar)

### [Graph](graph)

- [Breadth-first search](graph/bfs)
- [Depth-first search](graph/dfs)
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

### Searching

> [What is Tree Traversal?](ds/trees/traversal/README.md)

- [DFS: Depth-first Search $O(|V| + |E|)$](ds/trees/traversal/dfs/README.md)
- [BFS: Breadth-first Search $O(|V| + |E|)$](graph/bfs/README.md)
- [Binary search $O(log_2\ n)$](searching/binary-search/README.md)

### [Sorting](sorting/README.md)

| Algorithm                                | Time           | Space  | Stable |
|------------------------------------------|----------------|--------|--------|
| [Selection sort](sorting/selection_sort) | $O(n^2)$       | $O(1)$ | No     |
| [Insertion sort](sorting/insertion_sort) | $O(n^2)$       | $O(1)$ | Yes    |
| [Mergesort](sorting/mergesort)           |                |        |        |
| [Heapsort](sorting/heapsort)             |                |        |        |
| [Quicksort](sorting/quicksort)           | $O(n\ log\ n)$ | $O(log(n))$ | No |
| [Counting sort](sorting/counting_sort)   |                |        |        |
| [Radix sort](sorting/radix_sort)         |                |        |        |
| [Bucket sort](sorting/bucket_sort)       |                |        |        |
| [Randomly](sorting/randomly)             |                |        |        |

## Solved problems

### Well-known

- [0-1 Knapsack](problems/0-1-knapsack)
- [Activity Selection](problems/activity-selection)
- [Hiring Problem](problems/hiring)
- [Huffman Codes](problems/huffman-codes)
- [Longest common subsequence](problems/lcs)
- [Matrix Chain Multiplication](problems/matrix-chain-mult)
- [Maximum subarray problem](problems/maximum-subarray-problem/README.md)
- [Revenue Recognition](problems/revenue-recognition)
- [Rod Cutting](problems/rod-cutting)

## Language data structures complexity

- [JavaScript](languages/js/README.md)

## Coding platforms

### Leetcode

- [X - Height Checker](problems/leetcode/x/height-checker)
- [12: Integer to roman](problems/leetcode/12)
- [26: Remove duplicates from sorted array](problems/leetcode/26) - Easy - Array
- [27: Remove element](problems/leetcode/27) - Easy - Array
- [36: Valid sudoku](problems/leetcode/36) - Array / Matrix
- [76: Minimum sindow substring](problems/leetcode/76)
- [79: Word search](problems/leetcode/79)
- [88: Merge sorted array](problems/leetcode/88) - Easy - Array
- [112: Path sum](problems/leetcode/112)
- [151: Reverse words in a string](problems/leetcode/151)
- [208 Implement Trie (Prefix Tree)](problems/leetcode/208)
- [212: Word Search II](problems/leetcode/212)
- [219: Contains duplicate II](problems/leetcode/219)
- [222: Count complete tree nodes](problems/leetcode/222)
- [223: Rectangle area](problems/leetcode/223)
- [224: Basic calculator](problems/leetcode/224)
- [237: Delete node in a linked list](problems/leetcode/237)
- [263: Ugly number](problems/leetcode/263)
- [279: Perfect squares](problems/leetcode/279) - Trees - BFS
- [283: Move Zeroes](problems/leetcode/283) - Easy - Array
- [345: Reverse vowels of a string](problems/leetcode/345)
- [374: Guess number higher or lower](problems/leetcode/374)
- [380: Insert Delete GetRandom O(1)](problems/leetcode/380) - Hash Map + Array
- [433: Minimum genetic mutation](problems/leetcode/433)
- [485: Max consecutive ones](problems/leetcode/485) - Array
- [532: Continuous subarray sum](problems/leetcode/532)
- [587: Erect the fence](problems/leetcode/587)
- [645: Set mismatch](problems/leetcode/645)
- [766: Toeplitz matrix](problems/leetcode/766)
- [899: Orderly queue](problems/leetcode/899)
- [901: Stock plan](problems/leetcode/901) - Monotonic stack
- [905: Sort array by parity](problems/leetcode/905) - Easy - Array
- [907: Sum of subarray minimums](problems/leetcode/907) - Monotonic stack
- [941: Valid mountain array](problems/leetcode/941) - Easy - Array
- [947 - Most stones removed with same row or column](problems/leetcode/947)
- [976: Largest perimeter triangle](problems/leetcode/976)
- [977: Squares of a sorted array](problems/leetcode/977)
- [1047: Remove all adjacent duplicates in a string](problems/leetcode/1047) - Stack
- [1089: Duplicate Zeros](problems/leetcode/1089) - Queue
- [1198: Find smallest common element in all rows](problems/leetcode/1198) - Matrix
- [1208: Unique number of occurrences](problems/leetcode/1208) - Set + Map
- [1235: Maximum profit in job scheduling](problems/leetcode/1235) - Dynamic Programming + Binary Search
- [1239: Maximum length of a concatenated string with unique characters](problems/leetcode/1239)
- [1323: Maximum 69 number](problems/leetcode/1323)
- [1509: Minimum difference between largest and smallest value in three moves](problems/leetcode/1509)
- [1544: Make the string great](problems/leetcode/1544)
- [1706: Where will the ball fall](problems/leetcode/1706)
- [1832: Check if the sentence is pangram](problems/leetcode/1832)
- [1926: Nearest exit from entrance in maze](problems/leetcode/1926)
- [2095: Delete the middle node of a linked list](problems/leetcode/2095)
- [2225: Find players with zero or one losses](problems/leetcode/2225) - Map
- [2131: Longest palindrome by concatenating two letter words](problems/leetcode/2131)
