'use strict';

class Node {
  constructor(data) { // data - information from the position in the list
    this.data = data;
  }
}
  
class List {
  storage = [];
  
  length() {
    return this.storage.length;
  }

  append(data) {
    const node = new Node(data);
    this.storage.push(node);
  }
  
  insert(data, index) { // index - position in the list (counted from 0)
    if (index < 0 || this.storage[index] === undefined) { // error checking
      throw new Error('insert: Incorrect index value!');
    }

    const node = new Node(data);
    this.storage.splice(index, 0, node);
  }
  
  delete(index) {
    if (index < 0 || this.storage[index] === undefined) { // error checking
      throw new Error('delete: Incorrect index value!');
    }

    const element = this.get(index);
    this.storage.splice(index, 1);
    return element;
  }
  
  deleteAll(data) {
    for (let i = 0; i < this.length(); i++) {
      if (this.storage[i].data === data) {
        this.delete(i);
      }
    }
  }
  
  get(index) {
    if (index < 0 || this.storage[index] === undefined) {
      throw new Error('get: Incorrect index value!');
    }
    return this.storage[index];
  }
  
  clone() {
    const clonedList = new List();
    for (const element of this.storage) {
      clonedList.append(element.data);
    }
    return clonedList;
  }
  
  reverse() {
    this.storage.reverse();
  }

  findFirst(data) {
    for (let i = 0; i < this.length(); i++) {
      if (this.storage[i].data === data) {
        return i;
      }
    }
    return -1;
  }
  
  findLast(data) {
    for (let i = this.length() - 1; i >= 0; i--) {
      if (this.storage[i].data === data) {
        return i;
      }
    }
    return -1;
  }
  
  clear() {
    this.storage.splice(0, this.length());
  }
  
  extend(list) {
    for (const element of list.arrayFunc()) {
      this.storage.push(element);
    }
  }
  
  arrayFunc() { 
    return this.storage;
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
