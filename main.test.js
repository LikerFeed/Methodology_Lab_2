'use strict';

const List = require('./main.js');

describe('List tests', () => {
  let testList;

  beforeEach(() => {
    testList = new List();

    testList.append('Q');
    testList.append('W');
    testList.append('E');
    testList.append('R');
    testList.append('E');
    testList.append('T');
    testList.append('Y');
  });

  // length test

  test('length: must return the number of elements in the list', () => {
    expect(testList.length()).toEqual(7);
  });

  // length and append test

  test('length: must return the number of elements in a increased list', () => {
    testList.append('U');
    expect(testList.length()).toEqual(8);
  });

  // append test

  test('append: must add a new element', () => {
    testList.append('I');
    expect(testList.get(7).data).toBe('I');
  });

  // insert test

  test('insert: must insert a element in the right place', () => {
    testList.insert('Q', 2);
    expect(testList.get(2).data).toBe('Q');
  });

  // delete test

  test('delete: must delete the item at the index', () => {
    const del = testList.delete(3);

    expect(del.data).toBe('R');

    expect(testList.length()).toEqual(6);

    expect(testList.get(2).data).toBe('E');
    expect(testList.get(3).data).toBe('E');
    expect(testList.get(4).data).toBe('T');
  });
  
  // delete test

  test('delete: must delete the last item', () => {
    const del = testList.delete(6);

    expect(del.data).toBe('Y');

    expect(testList.length()).toEqual(6);

    expect(testList.get(4).data).toBe('E');
    expect(testList.get(5).data).toBe('T');
  });

  // delete test

  test('delete: must delete the first item', () => {
    const del = testList.delete(0);

    expect(del.data).toBe('Q');

    expect(testList.length()).toEqual(6);

    expect(testList.get(0).data).toBe('W');
    expect(testList.get(1).data).toBe('E');
  });

  // delete test
  
  test('delete: must return error if index is out of range', () => {
    const attempt = () => testList.delete(20);
    expect(attempt).toThrow('Incorrect index value!');
  });

  // deleteAll test

  test('deleteAll: must delete all elements has matching data', () => {
    testList.deleteAll('E');
    expect(testList.arrayFunc()).not.toContain({ data: 'E' });
  });

  // deleteAll test

  test('deleteAll: must do anything if no element has matching data', () => {
    testList.deleteAll('U');

    expect(testList.length()).toEqual(7);
  });

  // get test

  test('get: must return the data at the index', () => {
    expect(testList.get(2).data).toBe('E');
  });

  // get test

  test('get: must throw an error when incorrect index is passed as a parameter', () => {
    const attempt = () => testList.get(20);
    expect(attempt).toThrow('Incorrect index value!');
  });

  // clone test

  test('clone: must return a list with the same length and elements', () => {
    const clonedList = testList.clone();

    expect(testList.length()).toEqual(7);
    expect(clonedList.length()).toEqual(7);

    expect(clonedList.get(0).data).toBe('Q');
    expect(clonedList.get(1).data).toBe('W');
    expect(clonedList.get(2).data).toBe('E');
    expect(clonedList.get(3).data).toBe('R');
    expect(clonedList.get(4).data).toBe('E');
    expect(clonedList.get(5).data).toBe('T');
    expect(clonedList.get(6).data).toBe('Y');
  });

  test('clone: must return copy of the list without affect the original one', () => {
    const clonedList = testList.clone();
    clonedList.append('U');
    expect(testList.arrayFunc()).not.toContain({ data: 'U' });
  });

  // reverse test
  
  test('reverse: must return a list with reversed elements', () => {
    testList.reverse();

    expect(testList.get(0).data).toBe('Y');
    expect(testList.get(1).data).toBe('T');
    expect(testList.get(2).data).toBe('E');
    expect(testList.get(3).data).toBe('R');
    expect(testList.get(4).data).toBe('E');
    expect(testList.get(5).data).toBe('W');
    expect(testList.get(6).data).toBe('Q');
  });

  // findFirst test

  test('findFirst: must return the first found element', () => {
    expect(testList.findFirst('W')).toEqual(1);
  });

  // findFirst test

  test('findFirst: must return -1 when can not found elements', () => {
    expect(testList.findFirst('U')).toEqual(-1);
  });

  // findLast test

  test('findLast: must return the first found element', () => {
    expect(testList.findLast('T')).toEqual(5);
  });

  // findLast test

  test('findLast: must return -1 when can not found elements', () => {
    expect(testList.findLast('I')).toEqual(-1);
  });

  // clear test

  test('clear: must remove all elements in the list', () => {
    testList.clear();
    expect(testList.arrayFunc().length).toEqual(0);
  });

  // extend test

  test('extend: must extend the list with another list passed as a parameter', () => {
    const listForExtend = new List();

    listForExtend.append('U');
    listForExtend.append('I');
    listForExtend.append('O');
    listForExtend.append('P');

    testList.extend(listForExtend);

    expect(testList.findFirst('U')).toBe(7);
    expect(testList.findFirst('I')).toBe(8);
    expect(testList.findFirst('O')).toBe(9);
    expect(testList.findFirst('P')).toBe(10);
  });

  // arrayFunc test

  test('arrayFunc: must convert the list into array and return', () => {
    const mapped = testList.arrayFunc().map((element) => element.data);
    expect(mapped).toEqual(['Q', 'W', 'E', 'R', 'E', 'T', 'Y']);
  });
});
