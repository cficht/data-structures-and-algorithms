const { insertShiftArray } = require('./array-shift.js');

describe.skip('testing insertShiftArray', () => {
  const testArray1 = [1, 1, 1, 1];
  const testVal1 = 5;

  it('it should output an array with the value inserted', () => {
    expect((insertShiftArray(testArray1, testVal1))).toEqual([1, 1, 5, 1, 1]);
  });

  const testArray2 = ['bob', 'wilma', 'fred', 'frank', 'lisa'];
  const testVal2 = 'phil';

  it('it should output an array with the value inserted', () => {
    expect((insertShiftArray(testArray2, testVal2))).toEqual(['bob', 'wilma', 'fred', 'phil', 'frank', 'lisa']);
  });

  const testArray3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const testVal3 = 'one million';

  it('it should output an array with the value inserted', () => {
    expect((insertShiftArray(testArray3, testVal3))).toEqual([1, 2, 3, 4, 5, 'one million', 6, 7, 8, 9, 10]);
  });

  const testArray4 = [2, 4, 6, 8];
  const testVal4 = 5;

  it('it should output an array with the value inserted', () => {
    expect((insertShiftArray(testArray4, testVal4))).toEqual([2, 4, 5, 6, 8]);
  });

  const testArray5 = [4, 8, 15, 23, 42];
  const testVal5 = 16;

  it('it should output an array with the value inserted', () => {
    expect((insertShiftArray(testArray5, testVal5))).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
