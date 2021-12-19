# Graph

## Representation

There are two standard ways to represent a graph *G = (V, E)*, either directed or unidirected:

1. Collection of adjancency lists
2. Adjancency matrix 

Because *adjacency-list* representation provides a compact way to represent **sparse** graphs - those for which $|E|$ is much less than $|V|^2$ - it is usually the method of choice.

We may prefer an *adjacency-matrix* representation when the graph is **dense** - $|E|$ is close to $|V|^2$ - or when we need to be able to tell quickly if there is an edge connecting two given vertices.

![](2021-12-19-20-11-42.png)

> (a) An undirected graph G with 5 vertices and 7 edges. (b) An adjacency-list representation of G. (c) The adjacency-matrix representation of G.

![](2021-12-19-20-12-43.png)

> (a) A directed graph G with 6 vertices and 8 edges. (b) An adjacency-list representation of G. (c) The adjacency-matrix representation of G.

## Adjacency-list representation

The adjacency-list representation of a graph *G = (V, E)* consists of an array *Adj* of *|V|* lists, one for each vertex in *V*. For each $u \in V$, the adjacency list *Adj[u]* contains all the vertices *v* such that there is an edge $(u,v) \in E$. That is, *Adj[u]* consists of all the vertices adjacent to *u* in *G*.
