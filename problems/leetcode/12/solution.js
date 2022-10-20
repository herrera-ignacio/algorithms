// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let roman = "";
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  nums.forEach((n, idx) => {
    roman += keys[idx].repeat(Math.floor(num / n));
    num = num % n;
  })

  return roman;
};
