const { BinarySearch } = require('./array-binary-search.js');

describe('testing array-binary-search.js', () => {
  testArray1 = ['bob', 'fred', 'wilma', 'phil', 'jerry'];
  testKey1 = 'phil';

  testArray2 = [1, 35, 47, 1000, 500, 2, 343, 9];
  testKey2 = 2;

  it('it should return the index of the array element that matches the key', () => {
    expect((BinarySearch(testArray1, testKey1))).toEqual(3);
  });

  it('it should return the index of the array element that matches the key', () => {
    expect((BinarySearch(testArray2, testKey2))).toEqual(5);
  });
});