// if Iterator had "hasNext" implemented.
const { Betterator } = require('betterator');

const it1 = Betterator.fromIterable([0,1,2]);
const it2 = Betterator.fromIterable([3,4,5,6,7]);
const it3 = Betterator.fromIterable([8,9]);

const iterators = [it1, it2, it3];

class RoundRobinIterator {
  constructor(iterators) { 
    this.iterators = iterators;
    this.lastVisited = -1;
  }

  next() {
    if (!this.hasNext()) {
      throw new Error("Iteration finished!");
    }

    let i = this.lastVisited + 1;

    while (true) {
      const it = this.iterators[i % this.iterators.length];
      if (it.hasNext()) {
        this.lastVisited = i % this.iterators.length;
        return it.getNext();
      }
      i++;
    }
  }

  hasNext() {
    return iterators.some(it => it.hasNext());
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
