const { LinkedList } = require('./linked-list.js');

describe.skip('testing linked-list.js', () => {

  //LinkedList testing

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

  //append, insertBefore, insertAfter testing

  it('adds a new node with the given value to the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.append(10);
    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 2 -> 10');
  });

  it('adds multiple nodes to the end of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.append(10);
    linkedList.append(12);
    linkedList.append(14);
    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 2 -> 10 -> 12 -> 14');
  });

  it('adds a new node with the given newValue immediately before the first value node', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insertBefore(4, 10);
    expect(linkedList.toString()).toEqual('8 -> 6 -> 10 -> 4 -> 2');
  });

  it('inserts a node before the first node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insertBefore(8, 10);
    expect(linkedList.toString()).toEqual('10 -> 8 -> 6 -> 4 -> 2');
  });

  it('adds a new node with the given newValue immediately after the first value node', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insertAfter(4, 10);
    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 10 -> 2');
  });

  it('inserts a node after the last node of the linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insertAfter(2, 10);
    expect(linkedList.toString()).toEqual('8 -> 6 -> 4 -> 2 -> 10');
  });

  //kthFromEnd testing

  it('Return the node’s value that is k from the end of the list, where is k is greater than the length of the list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    expect(linkedList.kthFromEnd(5)).toEqual('Exception');
  });

  it('Return the node’s value that is k from the end of the list, where k and the length of the list are the same', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    expect(linkedList.kthFromEnd(4)).toEqual(10);
  });

  it('Return the node’s value that is k from the end of the list, where k is not a positive integer', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    expect(linkedList.kthFromEnd(-1)).toEqual('Exception');
  });

  it('Return the node’s value that is k from the end of the list, where the linked list is of a size 1', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    expect(linkedList.kthFromEnd(0)).toEqual(2);
  });

  it('Return the node’s value that is k from the end of the list, where k is in the middle', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    expect(linkedList.kthFromEnd(2)).toEqual(6);
  });

  //middle testing

  it('Return value of the node in the middle of the list with an odd length', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    expect(linkedList.middle()).toEqual(6);
  });

  it('Return value of the node in the middle of the list with an even length', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(8);
    linkedList.insert(10);
    linkedList.insert(12);
    expect(linkedList.middle()).toEqual('No Middle Node');
  });

  it('Return value of the node in the middle of the list with a length of 1', () => {
    const linkedList = new LinkedList();
    linkedList.insert(2);
    expect(linkedList.middle()).toEqual(2);
  });

});
