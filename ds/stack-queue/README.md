# Stacks & Queues

Dynamic sets in which the element removed from the set by the `DELETE` operation is prespecified.

In a __stack__, the element deleted from the set is the one most recently inserted: __last-in, first-out__ or __LIFO__.

In a __queue__, the element deleted is always that one that has been in the set for the longest time: __first-in, first-out__, or __FIFO__.

There are several implementations, we will focus on a simple array to implement each.

## Stacks

```
STACK-EMPTY(S)
  if S.top == 0
    return TRUE
  else return FALSE

PUSH(S,x)
  S.top = S.top + 1
  S[S.top] = x

POP(S)
  if STACK-EMPTY(S)
    error "underflow"
  else S.top = S.top - 1
    return S[S.top + 1]
```

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