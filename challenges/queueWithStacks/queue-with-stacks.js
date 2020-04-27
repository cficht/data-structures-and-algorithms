const { Stack } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    let stack1Track = this.stack1;
    let moveVal;
    while(stack1Track) {
      moveVal = this.stack1.pop();
      this.stack2.push(moveVal);
      stack1Track = this.stack1.top;
    }
    return moveVal;
  }
}

module.exports = {
  PseudoQueue
};
