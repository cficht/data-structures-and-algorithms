const { LinkedList } = require('../../Data-Structures/linkedList/linked-list.js');

function mergeLists(list1, list2) {
  const mergedList = new LinkedList();
  let currentL1 = list1.head;
  let currentL2 = list2.head;
  let mergeArr = [];
  while(currentL1 || currentL2) {
    if(currentL1) {
      mergeArr.push(currentL1.value);
      currentL1 = currentL1.next;
    }
    if(currentL2) {
      mergeArr.push(currentL2.value);
      currentL2 = currentL2.next;
    } 
  }
  mergeArr = mergeArr.reverse();
  mergeArr.forEach(value => {
    mergedList.insert(value);
  });
  return mergedList;
}

module.exports = { mergeLists };
