const List = require('./main.js');

const exampleList = new List();

console.log(exampleList.length(), '\n'); // output: 0

exampleList.append('Q'); // output: ['Q']
exampleList.append('W'); // output: ['Q', 'W']
exampleList.append('E'); // output: ['Q', 'W', 'E']
exampleList.append('R'); // output: ['Q', 'W', 'E', 'R']
exampleList.append('T'); // output: ['Q', 'W', 'E', 'R', 'T']
exampleList.append('Y'); // output: ['Q', 'W', 'E', 'R', 'T', 'Y']
console.log(exampleList.arrayFunc(), '\n');

console.log(exampleList.length(), '\n'); // output: 6

exampleList.insert('Q', 2); // output: ['Q', 'W', 'Q', 'E', 'R', 'T', 'Y']
console.log(exampleList.arrayFunc(), '\n');

exampleList.delete(4); // output: ['Q', 'W', 'Q', 'E', 'T', 'Y']
console.log(exampleList.arrayFunc(), '\n');

exampleList.deleteAll('Q'); // output: ['W', 'E', 'T', 'Y']
console.log(exampleList.arrayFunc(), '\n');

console.log(exampleList.get(2), '\n'); // output: 'T'

const clonedList = exampleList.clone(); // output: ['W', 'E', 'T', 'Y']
console.log(clonedList.arrayFunc(), '\n');

console.log(clonedList.findFirst('Y')); // output: 3
console.log(clonedList.findFirst('U'), '\n'); // output: -1

console.log(clonedList.findLast('E')); // output: 1
console.log(clonedList.findLast('I'), '\n'); // output: -1

clonedList.extend(exampleList); // output: ['W', 'E', 'T', 'Y', 'W', 'E', 'T', 'Y']
console.log(clonedList.arrayFunc(), '\n');

exampleList.reverse(); // output: ['Y', 'T', 'E', 'W']
console.log(exampleList.arrayFunc(), '\n');

clonedList.clear();
console.log(clonedList.arrayFunc()); // output: []