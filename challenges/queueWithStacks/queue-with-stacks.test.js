const { PseudoQueue } = require('./queue-with-stacks.js');

describe('testing queue-with-stacks.js', () => {

  it('can successfully enqueue into the PseudoQueue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(5);
    expect(queue.stack1.peek()).toEqual(5);
  });

  it('can successfully enqueue multiple values into the PseudoQueue', () => {
    const queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    expect(queue.stack1.peek()).toEqual(20);
  });
  
});
