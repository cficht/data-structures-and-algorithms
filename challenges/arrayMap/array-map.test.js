const { map } = require('./array-map.js');

describe('testing array-map.js', () => {
    const testFunction1 = (x) => {
        return x + 5;
    }
    const testArray1 = [1, 2, 3, 4, 5];
    const expectedArray1 = [6, 7, 8, 9, 10];

    const testFunction2 = (x) => {
        return x * 2;
    }
    const testArray2 = [2, 4, 6];
    const expectedArray2 = [4, 8, 12];

    it('it should output an array with the function applied', () => {
      expect((map(testArray1, testFunction1))).toEqual(expectedArray1);
    });
    it('it should output an array with the function applied', () => {
        expect((map(testArray2, testFunction2))).toEqual(expectedArray2);
    });
});