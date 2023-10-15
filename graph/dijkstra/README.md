# Dijkstra's algorithm

## Overview

While breadth-first-search finds the "shortest path" between two nodes in an _unweighted graph_ by looking at the path with the fewest segments, Dijkstra's algorithm works when you assign weight to each segment and you want to find the path with the smallest total weight.

> Dijkstra's algorithm only works on __graphs with no cycles__ and with __positive-weight edges__. If you want to find the shortest path in a graph that has negative-weight edges, you can use the _Bellman-Ford algorithm_.

## Steps

1. Find the "cheapest" node.
2. Update the costs of the neighbors of this node (and their parents).
3. Repeat until you've done this for every node.
4. Calculate the final path.

## Examples

- Minimize costs.
- Minimize time-traveled.
