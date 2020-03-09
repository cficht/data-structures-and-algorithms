const { map } = require('./array-map.js');
// require stuff at the top

describe('testing array-map.js', () => {

    const testFunction = (x) => {
        return x + 5;
    }
    const testArray = [1, 2, 3, 4, 5];
    const expectedArray = [6, 7, 8, 9, 10];

    it('it should output an array with the function applied to it', () => {
      expect((map(testArray, testFunction))).toEqual(expectedArray);
    });
});