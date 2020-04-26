const { BinarySearch } = require('./array-binary-search.js');

describe.skip('testing array-binary-search.js', () => {
  const testArray1 = ['bob', 'fred', 'wilma', 'phil', 'jerry'];
  const testKey1 = 'phil';

  const testArray2 = [1, 35, 47, 1000, 500, 2, 343, 9];
  const testKey2 = 2;

  it('it should return the index of the array element that matches the key', () => {
    expect((BinarySearch(testArray1, testKey1))).toEqual(3);
  });

  it('it should return the index of the array element that matches the key', () => {
    expect((BinarySearch(testArray2, testKey2))).toEqual(5);
  });
});
