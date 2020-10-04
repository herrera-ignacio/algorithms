# Priority Queue

Priority queue is a data structure for maintaining a set S of elements, each wich an associated value called a key.

## Procedures

* `INSERT(S, x)` inserts the element x into the set S, which is equivalent to the operation S = S union {x}.

* `MAXIMUM(S)` returns the element of S with the largest key.

* `EXTRACT-MAX(S)` removes and returns the element of S with the largest key.

* `INCREASE-KEY(S, x, k)` increases the value of element x's key to the new value k, which is assumed to be at least as large as x's current key value.

## Applications

Among other applications, we can use max priority queues to schedule jobs on a shared computer. Max-priority queue keeps track of the jbos to be performed and their relative priorities. When a job is finished or interrupted, the scheduler selects the highest-priority job from among those pending by calling EXTRACT-MAX. The scheduler can add a new job to the queue at any time by calling INSERT.

A min-priority queue can be used in an event-driven simulator. The items in the queue are events to be simulated, each with an associated time of occurrence that serves as its key. The events must be simulated in order of their time of occurence, because the simulation of an event can cause other events to be simulated in the future. The simulation program calls EXTRACT-MIN at each step to choose the next event to simulate. As new events are produced, the simulator inserts them into the min-priority queue by calling INSERT.

## Implementation

One of the most popular applications of a heap, is an efficient priority queue.

As with heaps, priority queues come in two forms, max-priority queues, which are in turn based on max-heaps, and min-priority queues.

When we use a heap to implement a priorit queue, we often ened to store a __handle__ to the corresponding application object in each heap element. The exact makeup of the handle depends on the application. Similarly, we need to store a handle to the corresponding heap element in each application object. Here, the handle would typically be an array index. These handles do need to be correctly maintained.

A heap can support any priority-queue operation on a set of size n, in O(lg n) time.
