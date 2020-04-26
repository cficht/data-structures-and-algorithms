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

}

module.exports = {
  Stack
};
