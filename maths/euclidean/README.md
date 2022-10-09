# Euclidean Algorithm

## Overview

Euclid's algorithm is an efficient method for computing the _greatest common divisor_ of two integers.

> It can be used to reduce fractions to their simplest form, and is a part of many other number-theoretic and cryptographic calculations.

It is based on the principle that the GCD of two numbers does not change if the larger number is replaced by its difference with the smaller number.

For example, 21 is the GCD of 252 and 105, and the same number 21 is also the GCD of 105 and 252 - 105 = 147.

It can take many substraction steps to find the GCD when one of the given numbers is much bigger than the other.

> There are additional methods for improving the efficiency. For example, to shortcut these steps, instead replacing the larger of the two numbers by its remainder when divided by the smaller of the two. With this improvement, the algorithm never requires more steps than five times the number of digits (base 10) of the smaller integer.

## Algorithm

Let $a$ and $b$ be two positive integers that we want to find the GCD of and $a \geq b$.

Let $k$ be an integer that counts the steps of the algorithm, starting with zero.

Each step begins with two non-negative remainders $r_1$ and $r_2$. Since the algorithm ensures that the remainders decrease steadily with every step, $r_{k-1} \le r_{k-2}$. The goal of the $k_{th}$ step is to find a quotient $q_k$ and remainder $r_k$ that satisfy the equation:

$
r_{k-2} = q_k r_{k-1} + r_k
$

Multiples of the smaller number $r_{k - 1}$ are substracted from the larger number $r{k - 2}$ until the remainder $r_k \le r_{k - 1}$.

In the initial step ($k = 0$), the remainders $r_{k-2}$ (i.e., $r_{-2}$) and $r_{k-1}$ (i.e., $r_{-1}$) are the two given numbers $a$ and $b$ for which GCD is to be found.

In the next step ($k = 1$), the remainders equal $b$ (i.e., $r_{-1}$) and the remainder $r_0$ from the initial step, and so on.

Thus, the algorithm can be written as a sequence of equations.

$
a = r_{-2} = q_0  b + r_0 \\
b = r_{-1} = q_1 r_0 + r_1 \\
r_0 = q_2 r_1 + r_2 \\
r_1 = q_3 r_2 + r_3 \\
\,\,\,\vdots
$

The algorithm finishes when you reach a step where $r_k = 0$. The GCD is then $r_{k-1}$.

### Procedure (division based)

```js
// b has to be the smaller integer
function gcd(a, b) {
  while (b != 0) {
    let temp = b; // r_{k-1}
    b = a % b; // r_k: reminder of a / b
    a = temp;
  }
  return a;
}
```

### Procedure (subtraction based)

```js
function gcd(a, b)
  while (a != b) { 
    if a > b {
      a := a − b
    }
    else {
      b := b − a 
    }
  }
  return a
```

## Visual example

![Euclidean Algorithm](./euclidean.gif)

Subtraction-based animation of the Euclidean algorithm. The initial rectangle has dimensions a = 1071 and b = 462. Squares of size 462×462 are placed within it leaving a 462×147 rectangle. This rectangle is tiled with 147×147 squares until a 21×147 rectangle is left, which in turn is tiled with 21×21 squares, leaving no uncovered area. The smallest square size, 21, is the GCD of 1071 and 462.
