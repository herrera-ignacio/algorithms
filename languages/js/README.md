# JS DS Complexity

- [JS DS Complexity](#js-ds-complexity)
  - [Set](#set)
  - [Hash table](#hash-table)
  - [Array](#array)

## Set

> Set objects must be implemented using either hash tables or other mechanisms that, on average, provide access times that are sublinear on the number of elements in the collection.

- Search: $O(1)$ (it's actually just _guaranteed_ that it'll be sublinear)
- Insert: $O(1)$
- Delete: $O(1)$

## Hash table

- Search: $O(1)$
- Insert: $O(1)$
- Delete: $O(1)$

## Array

- Search (`indexOf` / `includes`): $O(n)$
- Insert (`push`): amortized $O(1)$, sometimes $O(n)$ if resizing of internal ds is required.
- Pre-append (`unshift`): $O(n)$, since it requires reassigning all the indexes.
- Delete (`pop`): amortized $O(1)$, or $O(n)$ if resizing of internal ds is required (e.g., `slice`).
