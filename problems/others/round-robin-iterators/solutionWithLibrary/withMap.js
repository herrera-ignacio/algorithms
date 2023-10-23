// if Iterator had "hasNext" implemented.
const { Betterator } = require('betterator');

const it1 = Betterator.fromIterable([0,1,2]);
const it2 = Betterator.fromIterable([3,4,5,6,7]);
const it3 = Betterator.fromIterable([8,9]);

const iterators = [it1, it2, it3];

/**
 * ASSUMPTION: Iterators will have at least one "next" element at first.
 */
class RoundRobinIterator {
  constructor(iterators) { 
    this.iterators = iterators;
    this.next = 0;
    this._hasNext = true;
  }

  *getIterator() {
    if (!this.hasNext()) {
      throw new Error("Iteration finished!");
    }

    while (this.iterators.length > 0) {
      const it = this.iterators[this.next]; // O(1)
      const value = it.getNext();

      if (!it.hasNext()) {
        this.iterators.splice(this.next, 1); // O(1) if doubly linked list
        this._hasNext = this.iterators.length > 0;
      } else {
        this.next++; // O(1)
      }
  
      this.next %= this.iterators.length; // O(1)

      yield value;
    }
  }

  hasNext() {
    return this._hasNext;
  }
}

const demo = new RoundRobinIterator(iterators);
const iterator = demo.getIterator();
console.log("hasNext()", demo.hasNext());
console.log("for..of")
for (let val of iterator) {
  console.log("hasNext()", demo.hasNext());
  console.log("next()", val);
}
