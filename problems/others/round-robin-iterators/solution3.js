const it1 = [0,1,2].values();
const it2 = [3,4,5,6,7].values();
const it3 = [8,9].values();

const iterators = [it1, it2, it3];

// m = values.length
// n = iterators.length
class RoundRobinIterator {
  _itStates = {};
  _hasNext = false;
  _lastVisited = -1;

  constructor(iterators) {
    this.iterators = iterators;
    this.initItStates();
  }

  initItStates() {
    // O(n)
    iterators.forEach((it, idx) => {
      const next = it.next() // O(1);
      this._itStates[idx] = next;
      if (!next.done) {
        this._hasNext = true;
      }
    });
  }

  next() {
    if (!this.hasNext()) {
      throw new Error("Iteration finished already");
    }

    let curr = undefined;
    let found = false;
    let i = (this._lastVisited + 1) % this.iterators.length;

    while (!found) {
      if (!this._itStates[i].done) {
        curr = this._itStates[i].value;
        this._itStates[i] = this.iterators[i].next();
        this._lastVisited = i;
        found = true;
      }         

      i = (i + 1) % this.iterators.length;
    }

    return curr;
  }

  hasNext() {
    if (this._hasNext) {
      return true;
    } else {
      return Object.values(this._itStates).some(node => !node.done);
    }
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
