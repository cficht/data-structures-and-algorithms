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
}

module.exports = {
  Stack
};
