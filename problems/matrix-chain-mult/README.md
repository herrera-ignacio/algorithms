# Matrix Chain Multiplication

We are given a sequence (chain) `<A1, A2, ..., An>` of `n` matrices to be multiplied, and we wish to compute the product `A1.A2...An`.

Matrix multiplication is __associative__, and so all parenthesizations yield the same product. A product of matrices is __fully paranthesized__ if it is either a single matrix or the product of two fully parenthesized matrix products, surrounded by parentheses.

For example, if the chain of matrices is `<A1,A2,A3,A4>`, then we can fully parenthesize the product `A1.A2.A3.A4` in five distinct ways.

* `(A1.(A2.(A3.A4))`
* `(A1.((A2.A3).A4))`
* `((A1.A2).(A3.A4))`
* `((A1.(A2.A3)).A4)`
* `(((A1.A2).A3).A4)`

How we parenthesize a chain of matrices can have a dramatic impact on the the cost of evaluating the product.

```
MATRIX-MULTIPLY(A, B)
    if A.columns != B.rows
        error "incompatible dimensions"
    else
        let C be a new A.rows x B.columns matrix
            for i = 1 to A.rows
                for j = 1 to B.columns
                    c_ij = 0
                    for k = 1 to A.columns
                    c_ij = a_ik * b_kj
        return C
```

## Optimiazation problem

We state the __matrix-chain multiplication problem__ as follows: given a chain `<A1,...,An>` of `n` matrices, where for `i=1..n`, matrix `A_i`, fully parenthesize the product in a way that minimized the number of scalar multiplications.

