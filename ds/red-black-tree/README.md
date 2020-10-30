# Red-Black Trees

Red-black trees are one of many __search-tree schemes__ that are "__balanced__" in order to guarantee that basic dynamic-set-operationes take `O(lg n)` time in the worst-case.

![RBT](https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Red-black_tree_example.svg/500px-Red-black_tree_example.svg.png)

## Properties

A RBT is a BST with one extra bit of storage per nod, its __color__, whch can be either `RED` or `BLACK`. By constraining the node colors on any simple path from the root to a leaf, RBT ensures that no such path is more than twice as long as any other, so that the tree is __approximately balanced__.

1. Every node is either red or black.
2. The root is black.
3. Every leaf (NIL) is black.
4. If a node is red, then both its children are black.
5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.
   * We call the number of black nodes on any simple path from, but not including, a node `x` down to a leaf, the __black-height__ of the node, denoted `bh(x)`.

### Lemma

A RBT with `n` internal nodes has __height at most__ `2 lg (n+1)`.

## Algorithms

### Rotations

The search-tree operations `TREE-INSERT` and `TREE-DELETE`, when run on a RBT with `n` keys, take O(n) time. Because they modify the tree, the result may violate the RBT properties.

To restore these properties, we must change the colors of some of the nodes in the tree and also change the pointer structure, which we do through __rotations__ (left or right) in `O(1)`.

#### Left Rotation

When we do a __left rotation__ on a node `x`, we assume that its right child `y` is not `T.nil`; then `x` may be any node in the tree whose right child is not `T.nil`. The left rotation "pivots" around the link from `x` to `y`. It makes `y` the new root of the subtree, with `x` as `y`'s left child and `y`'s left child as `x`'s right child.

```
LEFT-ROTATE(T, x)
    y = x.right                 // set y
    x.right = y.left            // turn y's left subtree into x's right subtree
    if y.left != T.nil
        y.left.p = x    
    y.p = x.p                   // link x's parent to y
    if x.p == T.nil
        T.root = y
    elseif x == x.p.left
        x.p.left = y
    else x.p.right = y
    y.left = x                  // put x on y's left
    x.p = y
```

#### Right Rotation

Is simmetric to left rotation.

### Insertion

We can insert a node into a `n`-node RBT in `O(lg n)` time. To guarantee that the RBT properties are preserved, we then call an auxiliary procedure `RB-INSERT-FIXUP` to recolor nodes and perform rotations.

We shall break `RB-INSERT-FIXUP` in three major steps. First, we shall determine what violations of RB properties are introduced in `RB-INSERT` when node `z` is inserted and colored red. Second, we shall examine the overall goal of the `while`. Finally, we shall explore each of the three cases within the `while` loop's body.

There are only two properties that might be violated, _1_ (root is black) and _4_ (red node cannot have a red child).

#### Case 1: `z`'s uncle `y` is red.

Because `z.p.p` is black, we can color both `z.p` and `y` black, and we can color `z.p.p` red.

#### Case 2: `z`'s uncle `y` is black and `z` is a right child

We immediately use a left rotation to transform the situation into case 3, in which node z is a left child.

#### Case 3: `z`'s uncle `y` is black and `z` is a left child

The node `z.p.p` exists, we execute some color changes and a right rotation.

#### Algorithms

```
RB-INSERT(T, z)
    y = T.nil
    x = T.root
    while x != T.nil
        y = x
        if z.key < x.key
           x = x.left
        else x.right
    z.p = y
    if y == T.nil               // Place z in its correct position depending on y
        T.root = z
    else if z.key < y.key
        y.left = z
    else y.right = z
    z.left = T.nil
    z.right = T.nil
    z.color = RED
    RB-INSERT-FIXUP(T,z)

RB-INSERT-FIXUP(T, z)
    while z.p.color == RED
        if z.p == z.p.p.left
            y = z.p.p.right
            if y.color == RED               // CASE 1
                z.p.color = BLACK
                y.color = BLACK
                z = z.p.p
            else
                if z == z.p.right          // CASE 2
                    z = z.p
                    LEFT-ROTATE(T, z)
                z.p.color = BLACK          // CASE 3
                z.p.color = RED
                RIGHT-ROTATE(T, z.p, p)
        else T.root.color = BLACK                  
```


