const { Stack } = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }


}

module.exports = {
  PseudoQueue
};
