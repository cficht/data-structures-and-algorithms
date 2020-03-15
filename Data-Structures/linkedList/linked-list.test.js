const {
  // Node,
  LinkedList
} = require('./linked-list.js');

describe('testing linked-list.js', () => {
  it('successfully instantiate an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual({});
  });
});
