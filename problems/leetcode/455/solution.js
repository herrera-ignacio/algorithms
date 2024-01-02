/**
 * 
 * @param {number[]} g 
 * @param {number[]} s 
 * @return {number}
 */
const findContentChildren = (g, s) => {
  const factors = [...g].sort((a, b) => a - b);
  const cookieSizes = [...s].sort((a, b) => a - b);
  let child = 0;
  let cookie = 0;

  while (child < factors.length && cookie < cookieSizes.length) {
    if (factors[child] <= cookieSizes[cookie]) {
      child++;
    }
    cookie++;
  }

  return child;
}
