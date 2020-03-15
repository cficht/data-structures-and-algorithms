const {
  // Node,
  LinkedList
} = require('./linked-list.js');

describe('testing linked-list.js', () => {
  it('successfully instantiates an empty linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList).toEqual({ head: null });
  });

  it('properly inserts into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);

    expect(linkedList).toEqual({ 
      head: { 
        next: null, 
        value: 1 } 
    });
  });

  it('head property points to the first node in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);

    expect(linkedList).toEqual({ 
      head: { 
        next: { 
          next: null, 
          value: 1 }, 
        value: 2 } 
    });
  });

  it('properly inserts multiple nodes into the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);

    expect(linkedList).toEqual({ 
      head: { 
        next: { 
          next: { 
            next: null, 
            value: 1 }, 
          value: 2 }, 
        value: 3 } 
    });
  });
});
