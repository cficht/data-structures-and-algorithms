class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    return newNode;
  }

  includes(value) {
    let bool = false;
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) return bool = true;
      currentNode = currentNode.next;
    }
    return bool;
  }

  toString() {

  }
}

module.exports = {
  Node,
  LinkedList
};
