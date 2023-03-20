'use strict';

class Node {
  constructor(data) { // data - information from the position in the list
    this.data = data;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  length() {
    if (!this.tail) {
      return 0;
    }
    return this.tail.index + 1;
  }

  append(data) {
    if (typeof data !== 'string') return;

    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      node.index = 0;
    }

    if (this.tail) {
      this.tail.next = node;
      node.index = this.tail.index + 1;
    }

    if (this.length() > 1) {
      node.next = this.head;
    }

    this.tail = node;
  }

  insert(data, index) { // index - position in the list (counted from 0)
    if (this.length() === 0) { // error checking
      throw new Error('insert: Use append() here!');
    }

    if (index < 0 || index > this.tail.index) { // error checking
      throw new Error('insert: Incorrect index value!');
    }

    const node = new Node(data);

    if (index === 0) {
      node.next = this.head;
      node.index = 0;
      this.head = node;
      this.tail.next = this.head;
    } else {
      const found = this.get(index - 1);
      node.next = found.next;
      found.next = node;
      node.index = found.index + 1;
    }

    this.correctIndex(node.next);
  }

  delete(index) { // error checking
    if (index < 0 || index > this.tail.index || typeof(index) !== 'number') {
      throw new Error('delete: Incorrect index value!');
    }

    let deletedElement = null;

    if (this.length() === 0) {
      return;
    } else if (this.length() === 1) {
        deletedElement = this.head;
        this.head = null;
        this.tail = null;
    } else {
      deletedElement = this.get(index);

      if (deletedElement.index === 0) {
        this.head = deletedElement.next;
        this.tail.next = this.head;
        this.correctIndex(this.head, 'dec');
      } else if (deletedElement.index === this.tail.index) {
        const prevElem = this.get(index - 1);
        prevElem.next = this.head;
      } else {
        const prevElem = this.get(index - 1);
        const nextElem = this.get(index + 1);
        prevElem.next = nextElem;
  
        this.correctIndex(nextElem, 'dec');
      }
    }

    return deletedElement;
  }

  deleteAll(data) {
    if (typeof data !== 'string' || this.length() === 0) {
      return;
    } else if (this.length() === 1) {
      if (this.head.data === data) {
        this.delete(this.head.index);
      }
    } else {
      let index = 0;
      let cur = this.head;
      while (cur.index >= index) {
        if (cur.data === data) {
          this.delete(cur.index);
        }
  
        index = cur.index;
        cur = cur.next;
      }
    }
  }

  get(index) {
    if (index < 0 || index > this.tail.index || this.length() === 0 ) { // error checking
      throw new Error('get: Incorrect index value!');
    } else if (this.length() === 1) {
        return this.head;
    } else {
      let i = 0;
      let cur = this.head;
      while (cur.index >= i) {
        if (cur.index === index) {
          return cur;
        }
        i = cur.index;
        cur = cur.next;
      }
    }
  }

  clone() {
    const clonedList = new List();

    if (this.length() === 1) {
      clonedList.append(this.head.data);
    } else if (this.length() > 1) {
      let cur = this.head;
      let index = 0;
      while (cur.index >= index) {
        clonedList.append(cur.data);
        index = cur.index;
        cur = cur.next;
      }
    }

    return clonedList;
  }

  reverse() {
    if (this.length() < 2) return;

    const length = this.length();
    for (let i = 0; i < length - 1; i++) {
      this.insert(this.delete(this.tail.index).data, i);
    }
  }

  findFirst(data) {
    if (typeof data !== 'string') return;

    let index = 0;
    let cur = this.head;

    while (cur.index >= index) {
      if (cur.data === data) {
        return cur.index;
      }
      index = cur.index;
      cur = cur.next;
    }

    return -1;
  }

  findLast(data) {
    if (typeof data !== 'string') return;
    
    let index = 0;
    let foundIndex = null;
    let cur = this.head;

    while (cur.index >= index) {
      if (cur.data === data) {
        foundIndex = cur.index;
      }

      index = cur.index;
      cur = cur.next;
    }

    if (!foundIndex) {
      return 0;
    } else {
      return foundIndex;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(list) {
    let index = 0;
    let cur = list.head;

    while (cur.index >= index) {
      this.append(cur.data);
      index = cur.index;
      cur = cur.next;
    }
  }

  arrayFunc() {
    const output = [];

    if (this.length() === 1) {
      output.push(this.head);
    } else if (this.length() > 1) {
      let index = 0;
      let cur = this.head;

      while (cur.index >= index) {
        output.push(cur);
        index = cur.index;
        cur = cur.next;
      }
    }
    
    return output;
  }

  correctIndex(startElement, order = 'inc') {
    let i = 0;
    let cur = startElement;

    if (order === 'inc') {
      while (cur.index >= i) {
        cur.index++;
        i = cur.index;
        cur = cur.next;
      }
    } else if (order === 'dec') {
      while (cur.index >= i) {
        cur.index--;
        i = cur.index;
        cur = cur.next;
      }
    } else {
      return;
    }
  }
}

module.exports = List;

const testList = new List();

console.log(testList.length(), '\n'); // output: 0

testList.append('Q'); // output: ['Q']
testList.append('W'); // output: ['Q', 'W']
testList.append('E'); // output: ['Q', 'W', 'E']
testList.append('R'); // output: ['Q', 'W', 'E', 'R']
testList.append('T'); // output: ['Q', 'W', 'E', 'R', 'T']
testList.append('Y'); // output: ['Q', 'W', 'E', 'R', 'T', 'Y']
console.log(testList.arrayFunc(), '\n');

console.log(testList.length(), '\n'); // output: 6

testList.insert('Q', 2); // output: ['Q', 'W', 'Q', 'E', 'R', 'T', 'Y']
console.log(testList.arrayFunc(), '\n');

testList.delete(4); // output: ['Q', 'W', 'Q', 'E', 'T', 'Y']
console.log(testList.arrayFunc(), '\n');

testList.deleteAll('Q'); // output: ['W', 'E', 'T', 'Y']
console.log(testList.arrayFunc(), '\n');

console.log(testList.get(2), '\n'); // output: 'T'

const clonedList = testList.clone(); // output: ['W', 'E', 'T', 'Y']
console.log(clonedList.arrayFunc(), '\n');

console.log(clonedList.findFirst('Y')); // output: 3
console.log(clonedList.findFirst('U'), '\n'); // output: -1

console.log(clonedList.findLast('E')); // output: 1
console.log(clonedList.findLast('I'), '\n'); // output: -1

clonedList.extend(testList); // output: ['W', 'E', 'T', 'Y', 'W', 'E', 'T', 'Y']
console.log(clonedList.arrayFunc(), '\n');

testList.reverse(); // output: ['Y', 'T', 'E', 'W']
console.log(testList.arrayFunc(), '\n');

clonedList.clear();
console.log(clonedList.arrayFunc()); // output: []
