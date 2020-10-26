# Binary Search Tree

A BST is organized in a __binary tree__. We can represent such a tree by a linked data structure in which each node is an object. In addition to a _key_ and satellite data, each node contains attributes `left`, `right` and `p` that point to the nodes corresponding. If a child or the parent is missing, the appropriate attribute contains the value `NIL`.

Basic operations on a BST take time proportional to the height of the tree. For a complete BST with `n` nodes, such operations run in `Theta(lg n)` __worst-case time__. If the tree is a linear chain of `n` nodes, however, the same operations take `Theta(n)` rost-case time. Luckly, the expected height of a randomly built BST is O(lg n), so basic dynamic-set operations on such a tree take `Theta(lg n)` time on __average__.

## BST Property

The __keys__ in a BST are always stored in such a way as to __satisfy the binary-search-tree property__.

> Let `x` be a node ina BST. If `y` is a node in the left subtree of `x`, then `y.key <= x.key`. If `y` is a node in the right subtree of x, then `y.key >= x.key`.

## Algorithms

### Inorder tree walk

The BST property allows us to print out all the keys in a BST in sorted order by a simple recursive algorithm, called an __inorder tree walk__. This prints the key of the root of a subtree between printing the values in its left subtree and printing those in its right subtree.

```
INORDER-TREE-WALK(x):
    if x != NIL
        INORDER-TREE-WALK(x.left)
        print x.key
        INORDER-TREE-WALK(x.right)
```

### Preorder tree walk

Prints the root before the values in either subtree

### Postorder tree walk

Prints the root after the values in its subtrees.

### Searching

Given a pointer to the root of the tree and a key `k`, the following returns a pointer to a node with key `k` if one exists, otherwise, it returns `NIL`.

```
TREE-SEARCH(x, k)
    if x == NIL or k == x.key:
        return x
    if k < x.key
        return THREE-SEARCH(x.left, k)
    else return TREE-SEARCH(x.right, k)

ITERATIVE-TREE-SEARCH(x, k)
    while x != NIL and k != x.key:
        if k < x.key
            x = x.left
        else x = x.right
    return x
```

### Max & Min

```
TREE-MINIMUM(x)
    while x.left != NIL
        x = x.left
    return x

TREE-MAXIMUM(x)
    while x.right != NIL
        x = x.right
    return x
```

### Successor & Predecessor | O(h)

Given a node in a BST, sometimes we need to find its successor in the sorted order determined by an inorder tree walk.

If all keys are distinct, the successor of a node `x` is the node with the smallest key greater than `x.key`. The following returns the successor of a node `x` in a BST if it exists, and `NIL` if `x` hast he largest key in the tree.

```
TREE-SUCCESSOR(x)
    if x.right != NIL
        return TREE-MINIMUM(x.right)
    y = x.p
    while y != NIL and x == y.right
        x = y
        y = y.p
    return y
```

We break the code into two cases. If the right subtree of node x is nonempty, then the successor of x is just the leftmost node in x's right subtree. On the other hand, if the right subtree of node `x` is empty and x has a successor `y`, then `y` is the lowest ancestor of `x` whose left child is also an ancestor of `x`.