# Recursion

- [Recursion](#recursion)
  - [Definition](#definition)
  - [Types](#types)
    - [Head recursion](#head-recursion)
  - [Iterative vs Recursive](#iterative-vs-recursive)
    - [Example](#example)
      - [Iterative solution](#iterative-solution)
      - [Recursive solution](#recursive-solution)

## Definition

Recursion solves problems where the solution depends on solutions to smaller instances of the same problem (see [divide and conquer](dq.md)) by using functions that call themselves from within their own code.

> The power of recursion evidently lies in the possibility of defining an infinite set of objects by a finite statement. In the same manner, an infinite number of computations can be described by a finite recursive program, even if this program contains no explicit repetitions.

When you write a recursive function, you have to tell it when to stop recursing. Every recursive function has two parts: the _base case_ and the _recursive case_ so that it doesn't recurse forever.

```js
// Countdown example
function countdown(n) {
  console.log(n);
  if (n < 1) {
    return; // base case
  } else {
    countdown(n-1); // recursive case
  }
}
```

## Types

- _Head_ (or _top_) recursion: the recursive call is the first thing to happen in the function. The base case is evaluated last.
- _Tail_ (or _bottom_) recursion: the recursive call is the last thing to happen in the function. The base case is evaluated first.
- _Body_ recursion: the recursive call is in the middle of the function. The base case is evaluated first.

### Head recursion

Usually involves a _stack_.

```js
// Factorial example
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
```

## Iterative vs Recursive

Every recursive program can be written using iterative methods. Recursion is used __when it makes the solution clearer__.

> Loops may chieve a performance gain for your program. Recursion may achieve a performance gain for your programmer. Choose which is more important in your situation. - Leigh Caldwell.

Iterative approaches will often use a stack or queue to store values while they are waiting to be processed. Recursion does this implicitly, because the function call stack is used.

### Example

Say you have a box containing more boxes, with more boxes inside those boxes. There's a unique box that contains a diamond. How do you find the diamond?

#### Iterative solution

1. Make a pile of boxes to look through.
2. Grab a box and look through it.
3. If you find a box, add it to the pile to look through later.
4. If you find a key, you're done.
5. Repeat.

```js
function lookForKey(box) {
  const pile = [box];

  while (pile.length > 0) {
    const box = pile.shift();

    for (const item of box) {
      if (item === 'key') {
        console.log('found the key!');
        return;
      } else {
        pile.push(item);
      }
    }
  }
}
```

#### Recursive solution

1. Look through the box.
2. If you find a box, go to step 1.
3. If you find a key, you're done.

```js
function lookForKey(box) {
  for (const item of box) {
    if (item === 'key') {
      console.log('found the key!');
      return;
    } else {
      lookForKey(item);
    }
  }
}
```
