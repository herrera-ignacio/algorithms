// https://leetcode.com/problems/online-stock-span/
// Monotonic stack

const assert = require('assert');

const StockSpanner = function() {
  // Stack will contain pairs of 
  // [price, span]
  // where span is the number of consecutive days where the price was less than
  // or equal to that day's price
  this.stack = [];
}

/**
 * 
 * @param {number} price 
 * @return {number}
 */
 StockSpanner.prototype.next = function(price) {
  let span = 1;

  while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
    const top = this.stack.pop();
    span += top[1];
  }

  this.stack.push([price, span]);

  return span;
}

const stockSpanner = new StockSpanner();
assert.equal(stockSpanner.next(100), 1);
assert.equal(stockSpanner.next(80), 1);
assert.equal(stockSpanner.next(60), 1);
assert.equal(stockSpanner.next(70), 2);
assert.equal(stockSpanner.next(60), 1);
assert.equal(stockSpanner.next(75), 4); // last 4 prices, including today's, were less than or equal to today's price.
assert.equal(stockSpanner.next(85), 6);
