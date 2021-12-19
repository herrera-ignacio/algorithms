# Breadth-first Search

- [Breadth-first Search](#breadth-first-search)
  - [Definition](#definition)
  - [Example Implementation](#example-implementation)
  - [Analysis](#analysis)

## Definition

**Breadth-first search** is one of the simplest algorithms for searching a graph and the archetype for many important graph algorithms.

> Prim's minimum-spanning-tree algorithm and Dijkstra's single-source shortest-paths algorithm use ideas similar to those in BFS.

Given a graph $G = (V,E)$ and a distinguished *source* vertex *s*, BFS systematically explores the edges of *G* to "*discover*" every vertex that is reachable from *s*. It computes the distance (smallest number of edges) from *s* to each reachable vertex.

It also produces a *breadth-first tree* with root *s* that contains all reachable vertices. For any vertex *v* reachable from *s*, the simple path in the breadth-first tree from *s* to *v* corresponds to a *"shortest path"* from *s* to *v* in *G*, that is, a path containing the smallest number of edges.

BFS is so named because it expands the frontied between discovered and undiscovered vertices uniformly across the breadth of the frontier. That is, the algorithm discovers all vertices at distance *k* from *s* before discovering any vertices at distance *k+1*.

To keep track of progress, BFS *colors* each vertex white, gray, or black. All vertices start out white and may later become gray and then black. A vertex is *discovered* the first time it is encountered during the search, at which time it becomes nonwhite. Gray and black vertices, therefore, have been discovered, but BFS distinguishes between them to ensure that the search proceeds in a breadth-first manner. If $(u,v) \in E$ and vertex *u* is black, then vertex *v* is either gray or black; that is, all vertices adjacent to black vertices have been discovered. Gray vertices may have some adjacent white vertices; they represent the frontier between discovered and undiscovered vertices.

BFS constructs a breadth-first tree, initially containing only its *root*, which is the source vertex *s*. Whenever the search discovers a white vertex *v* in the course of scanning the adjacency list of an already discovered vertex *u*, the vertex *v* and the edge *(u,v)* are added to the tree.

## Example Implementation

The fllowing BFS implementation assumes that the input graph $G = (V, E)$ is represented using *adjacency lists*.

```
BFS(G, s):

for each vertex u in G.V - { s }
  u.color = WHITE
  u.distance = +infinity
  u.pi = NIL
s.color = GRAY
s.distance = 0
s.predecessor = NIL
Q = empty_set

ENQUEUE(Q, s)

while (Q != empty_set)
  u = DEQUEUE(Q)
  for each v in G.Adj[u]
    if v.color == WHITE
      v.color = GRAY
      v.distance = u.d + 1
      v.predecessor = u
      ENQUEUE(Q, v)
  u.color = BLACK
```

> `u.distance` holds the distance from the source `s` to vertex `u` computed by the algorithm.

![](2021-12-19-20-41-17.png)

## Analysis

We use *aggregate analysis*.

* Enqueuing and dequeuing take *O(1)* time, and so the total time devoted to queue operations is *O(V)*.
* The procedure scans the adjacency list of each vertex only when the vertex is dequeued, it scans each adjacency list at most once. Since the sum of the lengths of all adjacency lists is $\Theta(E)$, the total time spent in scanning adjacency lists is *O(E)*.

Thus, the running time of BFS procedure is *O(V + E)*. Thus, BFS runs in time *linear* in the size of the adjacency-list representation of G.
