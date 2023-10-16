# NP-complete problems

These problems have something in common, you __need to calculate every possible solution__ and pick the most optimal one.

They are expensive to calculate and it's usually better to use a simpler approximation algorithm (e.g., greedy algorithms).

## Identify them

> Can you restate your problem as the set-covering or the traveling-salesperson problems?

- All combinations of "X".
- Have to calculate every possible version of X because you can't break it down into smaller sub-problems.
- Involves a sequence (e.g., cities like traveling salesperson) and it's hard to solve.
- Involves a set (e.g., radio stations set-covering) and it's hard to solve.

## Example problems

- Traveling salesperson.
- Set-covering.

### Traveling salesperson vs shortest path

Calculating the shortest way to get from point A to point B can be done with Dijkstra's algorithm but if you want to find the shortest path that connects several points, that's the traveling-salesperson problem, which is NP-complete.
