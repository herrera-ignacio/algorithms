# Queues

Dynamic sets in which the element removed from the set by the `DELETE` operation is prespecified.

In a __queue__, the element deleted is always that one that has been in the set for the longest time: __first-in, first-out__, or __FIFO__.

There are several implementations, we will focus on a simple array to implement each.

## Queues

```
ENQUEUE(Q, x)
  Q[Q.tail] = x
  if Q.tail == Q.length
    Q.tail = 1
  else Q.tail = Q.tail + 1

DEQUEUE(Q)
  x = Q[Q.head]
  if Q.head == Q.length
    Q.head = 1
  else Q.head = Q.head + 1
  return x
```
