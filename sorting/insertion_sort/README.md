# Insertion Sort - O(n^2)

## Pseudocode

```pseudo
for j = 2 to A.length
  key = A[j]
  // Insert A[j] into sorted sequence A[1..j-1]
  i = j - 1
  while i > 0 and A[i] > key
    A[i+1] = A[i]
    i--
  A[i+1] = key
```
