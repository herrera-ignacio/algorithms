# Hash Tables

Dynamic set that supports only dictionary operations INSERT, SEARCH, and DELETE.

Hash table is an effective data structure for __implementing dictionaries__. Altough searching for an element in a hash table can take as long as searching for an element in a linked list (Theta(n) time in worst case), in practice, hashing performs extremely well. Under reasonable assumptions, the average time to search for an element in a hash table is O(1).

## Uses

For example, a compilar that translates a programming language maintains a symbol table, in which the keys of elements are arbitrary character strings corresponding to identifiers in the language.

## Vs Array indexing

When the number of keys actually stored is small relative to the total number of possible keys, hash tables become an effective alternative to directly addressing an array, since a hash table typically uses an array of size proportional to the number of keys actually stored.

Instead of using the key as an array index directly, the array index is computed from the key.

## Direct-address Tables

Direct addressing is a simple technique that works well when the universe `U` of keys is reasonably small. We shall assume that no two elements have the same key.

To represent the dynamic set, we use an array, or __direct-address table__, denoted by `T[0..,m-1]`, in which each position, or __slot__, corresponds to a key in the universe `U`. If the set contains no element with the key `k`, then `T[k] = NIL`.

Each operation takes only __O(1) time__.

```
DIRECT-ADDRESS-SEARCH(T,k)
  return T[k]

DIRECT-ADDRESS-INSERT(T,x)
  T[x.key] = x

DIRECT-ADDRESS-DELETE(T,x)
  T[x.key] = NIL
```

The __downside__ is that if the universe `U` is large, storing a table of size `|U|` may be impractical, or ecen impossible. Furthermore, the set `K` of keys actually stored may be so mall relative to `U` that most of the space allocated for `T` would be wasted.

## Hash Tables

When the set `K` of keys stored in a dictionary is much smaller than the universe `U` of all possible keys, a hash table __requires much less storage__ than a direct-address table. Specifically, we can reduce the storage requirements to __Theta(|K|)__ while we maintain the benefit that searching for an element in the hash table still requires only O(1) time. The __catch__ is that this bound is for the __average-case time__, whereas for direct addressing it holds for the _worst-case time_.

With direct addressing, an element with key k is stored in slot k. With hashing, this element is stored in slot `h(k)`, that is, we use a __hash function__ `h` to compute the slot from the key `k`. Here `h` maps the universe `U` of keys into the slots of a __hash table__ `T[0..m-1]` where the size `m` of the hash table is typically much less than `|U|`.

```
h: U -> {0, 1, ..., m-1}
```

We say that an element with key `k` __hashes__ to slot `h(k)`, we also say that `h(k)` is the __hash value__ of key `k`. The hash function reduces the range of array indices and hence the size of the array.

There is one hitch, __two keys may hash to the same slot (collision)__.

## Collision Resolution

### Chaining

In __chaining__, we place all the elements that hash to the same slot into the same __linked list__.

Slot `j` contains a pointer to the head of the list of all stored elements that hash to `j` or `NIL`.

```
CHAINED-HASH-INSERT(T,x) // O(1) worst-case time
  insert x at the head of list T[h(x.key)]

CHAINED-HASH-SEARCH(T,k) // Theta(n) + time to hash worst-case time
  search for an element with key k in list T[h(k)]

CHAINED-HASH-DELETE(T,x)
  delete x from the list T[h(x.key)]
  // should use double linked list so that we can delete an item quickly in O(1).
```