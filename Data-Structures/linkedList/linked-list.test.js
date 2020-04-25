const {
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

  it('returns true finding an existing value in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);

    expect(linkedList.includes(2)).toEqual(true);
  });

  it('returns false when the value is not in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);

    expect(linkedList.includes(5)).toEqual(false);
  });

  it('returns a collection of all the values that exist in the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);

    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 2');
  });

  it(' adds a new node with the given value to the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.append(10);

    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 2 -> 10');
  });
});
