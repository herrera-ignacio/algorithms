# Round Robin Iterators

## Problem

Given an array of iterators, how would you implement a new iterator that cycles through them in a round robin pattern? `hasNext` should return true if any input iterator `hasNext`. Next should follow the following example. Suppose the array has iterators backed by queues (0 1 2) (3 4 5 6) (7 8) (write on the whiteboard). Know that you can’t index into these. They only implement `hasNext` and `next`. I want an iterator where `next()` goes `[0,3,7,1,4,8,2,5,6]`. Make sense?

## Use cases

- Load balancing.
- Distributing work.
