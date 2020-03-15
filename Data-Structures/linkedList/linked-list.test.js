const {
  // Node,
  LinkedList
} = require('./linked-list.js');

describe('testing linked-list.js', () => {
  it('successfully instantiates an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList).toEqual({ head: null });
  });

  // it('properly inserts into the linked list', () => {
  //   const linkedList = new LinkedList();
  //   expect(linkedList).toEqual({});
  // });
});
