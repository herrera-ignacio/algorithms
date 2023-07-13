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

    let found = false;
    let allVisited = false;
    let i = (this._lastVisited + 1) % this.iterators.length;

    while (!found && !allVisited) {
      if (this._itStates[i])           

      if (i === this.lastVisited) {
        allVisited = true;
      }

      i = (i + 1) % this.iterators.length;
    }

  }

  hasNext() {

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
