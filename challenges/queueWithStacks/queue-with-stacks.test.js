const { PseudoQueue } = require('./queue-with-stacks.js');

describe.skip('testing queue-with-stacks.js', () => {

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
    expect(queue.stack1.peek()).toEqual(10);
  });

  it('can successfully dequeue out of a queue the expected value. first in, first out', () => {
    const queue = new PseudoQueue();
    queue.enqueue(20);
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(20);
  });

  it('can successfully dequeue out of a queue the expected value. first in, first out', () => {
    const queue = new PseudoQueue();
    queue.enqueue(15);
    queue.enqueue(10);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(15);
  });
  
});
