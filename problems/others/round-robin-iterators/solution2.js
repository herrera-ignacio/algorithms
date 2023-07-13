const it1 = [0,1,2].values();
const it2 = [3,4,5,6,7].values();
const it3 = [8,9].values();

const iterators = [it1, it2, it3];

class RoundRobinIterator {
  constructor(iterators) {
    this.iterators = iterators;
    this.lastVisited = -1;
    this._hasNext = undefined;
    this._next = this.getNext();
  }

  next() {
    if (this.hasNext()) {
      const next = this._next;
      this.getNext();
      return next;
    } else {
      throw new Error("Iteration finished!");
    }
  }

  hasNext() {
    return this._hasNext;
  }

  /**
   * This solution uses a do-while.
   * @returns 
   */
  getNext() {
    this._hasNext = false;
    const startFrom = (this.lastVisited + 1) % this.iterators.length;
    let i = startFrom;

    do {
      const { value, done } = this.iterators[i].next();
      if (!done) {
        this._next = value;
        this._hasNext = true;
        this.lastVisited = i % this.iterators.length;
      }

      i = (i + 1) % this.iterators.length;
    } while (!this._hasNext && i !== startFrom);

    return this._next;
  }
}

const demo = new RoundRobinIterator(iterators);
console.log("hasNext()", demo.hasNext());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
console.log("next()", demo.next());
