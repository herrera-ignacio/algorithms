// https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/4205266/100-recursive-bit-count/
const kthGrammar = (n, k) => {
  if (n === 1) {
    return "0";
  }

  // nth row has 2^(n-1) elements
  const rowMiddle = 2 ** (n - 2); 

  if (k <= rowMiddle) {
    // k in first half, then it's the same as kth element in (n-1)th row
    return kthGrammar(n - 1, k)
  } else {
    // k in second half, then it's the opposite of (k - rowMiddle)th element in (n-1)th row
    return 1 - kthGrammar(n - 1, k - rowMiddle)
  }
}
