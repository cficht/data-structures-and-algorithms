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
    let str = '';
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode !== this.head) str += ' -> ';
      str = `${str}${currentNode.value}`;
      currentNode = currentNode.next;
    }
    return str;
  }

  append(value) {
    const newNode = new Node(value, null);
    let currentNode = this.head;
    while(currentNode) {   
      if(!currentNode.next){
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue, value);
    let currentNode = this.head;
    while(currentNode) { 
      if(currentNode.value === value){
        const copy = Object.assign({}, currentNode);
        currentNode.value = newNode.value;
        currentNode.next = copy;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue, value);
    let currentNode = this.head;
    while(currentNode) {   
      if(currentNode.value === value){
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this.head;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let listLength = 0;
    let fromEnd = 0;
    while(currentNode) {
      if(currentNode.next){
        listLength++;
        currentNode = currentNode.next;
      } else {
        listLength++;
        fromEnd = listLength - k;
        if(fromEnd <= 0 || k < 0) return 'Exception';
        currentNode = null;
      }
    }
    // console.log(fromEnd);
    // console.log(k);
    currentNode = this.head;
    while(fromEnd > 1) {
      currentNode = currentNode.next;
      fromEnd--;
    }
    return currentNode.value;
  }

}

module.exports = {
  LinkedList
};
