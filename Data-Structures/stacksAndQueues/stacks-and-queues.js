class Node {
  constructor(value, pointer) {
    this.value = value;
    this.pointer = pointer;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;
    return node;
  }

  pop() {
    if(!this.top) return 'Exception';
    const popVal = this.top.value;
    this.top = this.top.pointer;
    return popVal;
  }

  peek() {
    if(!this.top) return 'Exception';
    const peekVal = this.top.value;
    return peekVal;
  }

  isEmpty() {
    return !this.top ? true : false;
  }
}


class Queue {
  constructor() {
    this.front = null;
  }

  enqueue(value) {
    const node = new Node(value, null);
    let currentNode = this.front;
    if(!currentNode) return this.front = node;   
    while(currentNode) {
      if(currentNode.pointer === null) {
        currentNode.pointer = node;
        return this.front;
      }
      currentNode = currentNode.pointer;  
    }
  }

  dequeue() {
    if(!this.front) return 'Exception';
    const dequeuedNode = this.front.value;
    this.front = this.front.pointer;
    return dequeuedNode;
  }

  peek() {
    if(!this.front) return 'Exception';
    const peekVal = this.front.value;
    return peekVal;
  }
}


module.exports = {
  Stack,
  Queue
};
