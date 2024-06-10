# Array

- [Overview](#overview)
- [Applications](#applications)
- [Algorithms \& Techniques](#algorithms--techniques)
  - [Two-Pointer](#two-pointer)
  - [Circular Array](#circular-array)
- [Design \& Implementation](#design--implementation)
  - [Java](#java)

## Overview

![memory location](2021-08-06-23-45-44.png)

An array is a collection of items stored at contiguous memory locations. 
The idea is to store multiple items of the same type together.
This makes it easier to calculate the position of each element by simply adding an offset to a base value
(i.e., the memory location of the first element of the array).

## Applications

1. Store data elements of the same data type.
2. CPU Scheduling.
3. Implement other data structures like Stacks, Queues, Heaps, Hash tables, etc.

## Algorithms & Techniques

### Two-Pointer traversal

![two pointer](2023-03-28-23-34-13.png)

> Two pointers help us cover a sub-array within the main array.
