const { mergeLists } = require('./ll-merge.js');
const { LinkedList } = require('../../Data-Structures/linkedList/linked-list.js');

describe('testing ll-merge.js', () => {

  it('merge two linked lists of the same length', () => {
    const list1 = new LinkedList();
    list1.insert(2);
    list1.insert(3);
    list1.insert(1);
    const list2 = new LinkedList();
    list2.insert(4);
    list2.insert(9);
    list2.insert(5);
    const list3 = new LinkedList();
    list3.insert(4);
    list3.insert(2);
    list3.insert(9);
    list3.insert(3);
    list3.insert(5);
    list3.insert(1);
    expect((mergeLists(list1, list2))).toEqual(list3.toString());
  });

  it('merge two linked lists where the first one is smaller than the second', () => {
    const list1 = new LinkedList();
    list1.insert(3);
    list1.insert(1);
    const list2 = new LinkedList();
    list2.insert(4);
    list2.insert(9);
    list2.insert(5);
    const list3 = new LinkedList();
    list3.insert(4);
    list3.insert(9);
    list3.insert(3);
    list3.insert(5);
    list3.insert(1);
    expect((mergeLists(list1, list2))).toEqual(list3.toString());
  });

});
