class Heap {
  constructor() {
    this.h = [0];
    this.size = 0;
  }
  insert(e) {
    this.h[0] = ++this.size;
    this.h[this.size] = e;
    this.fixUp();
  }
  fixUp() {
    let pos = this.size;
    while (pos > 0) {
      let parent = Math.floor(pos / 2);
      if (this.h[parent][0] > this.h[pos][0]) {
        let temp = this.h[parent];
        this.h[parent] = this.h[pos];
        this.h[pos] = temp;
        pos = parent;
      } else {
        break;
      }
    }
  }

  removeRoot() {
    let smallest = this.h[1];
    this.h[1] = this.h.pop();
    this.h[0] = --this.size;
    this.fixDown();
    return smallest;
  }
  fixDown() {
    let pos = 1;
    while (pos * 2 < this.size) {
      let child = pos * 2;
      if (this.h[child][0] > this.h[child + 1][0]) {
        child += 1;
      }
      if (this.h[pos][0] > this.h[child][0]) {
        let temp = this.h[child];
        this.h[child] = this.h[pos];
        this.h[pos] = temp;
        pos = child;
      } else {
        break;
      }
    }
  }

  getArray() {
    let a = [];
    for (let i = 1; i <= this.size; i++) {
      a.push(this.h[i][1] + ': ' + this.h[i][0]);
    }
    return a;
  }

  heapSort() {
    let a = [];
    let its = this.h[0];
    for (let i = 0; i < its; i++) {
      a.push(this.removeRoot());
    }
    console.log(a);
    return a;
  }
}
module.exports = { Heap };
