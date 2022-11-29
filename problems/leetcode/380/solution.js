// https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/418238/insert-delete-getrandom-o-1/

class RandomizedSet {
  constructor() {
    this.map = {};
    this.list = [];
  }

  /**
   * O(1)
   * @param {number} val 
   * @returns {boolean} true if inserted (i.e., it didn't exist).
   */
  insert(val) {
    // Exists
    if (this.map[val] !== undefined) {
      return false;
    }

    // Doesn't exist
    this.map[val] = this.list.length;
    this.list.push(val);
    return true;
  }

  /**
   * O(1)
   * @param {number} val 
   * @returns {boolean} true if it exists.
   */
  remove(val) {
    // Exists
    if (this.map[val] !== undefined) {
      this.swap(this.map[val], this.list.length - 1);
      this.list.pop();
      delete this.map[val];
      return true;
    }

    // Doesn't exist
    return false;
  }

  /**
   * O(1)
   * Assumes set has at least 1 element.
   * @returns {number}
   */
  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  /**
   * 
   * @param {number} i 
   * @param {number} j 
   */
  swap(i, j) {
    const temp = this.list[i];

    this.map[this.list[i]] = j;
    this.list[i] = this.list[j];

    this.map[this.list[j]] = i;
    this.list[j] = temp;
  }
}
