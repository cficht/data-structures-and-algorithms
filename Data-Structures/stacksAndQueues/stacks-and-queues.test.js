const { Stack } = require('./stacks-and-queues.js');
const { Queue } = require('./stacks-and-queues.js');

describe('testing Stack class', () => {

  it('can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    expect(stack).toEqual({ 
      top: { 
        pointer: null, 
        value: 5 } 
    });
  });

  it('can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack).toEqual({ 
      top: { 
        pointer: { 
          pointer: null, 
          value: 5 }, 
        value: 10 } 
    });
  });

  it('can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.pop()).toEqual(10);
  });

  it('can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.pop();
    stack.pop();
    expect(stack).toEqual({ top: null });
  });

  it('can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });

  it('returns exception when using pop on an empty stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.pop();
    stack.pop();
    expect(stack.pop()).toEqual('Exception');
  });

  it('returns exception when using peek on an empty stack', () => {
    const stack = new Stack();
    expect(stack.peek()).toEqual('Exception');
  });

  it('successfully instantiates an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('returns false because the stack has nodes', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.isEmpty()).toEqual(false);
  });

});

describe('testing Queue class', () => {

  it('can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    expect(queue).toEqual({ 
      front: { 
        pointer: null, 
        value: 2 } 
    });
  });

  it('can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    expect(queue).toEqual({ 
      front: { 
        pointer: { 
          pointer: null, 
          value: 4 }, 
        value: 2 } 
    });
  });

  it('can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);
    expect(queue.dequeue()).toEqual(2);
  });

  it('can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.enqueue(6);
    expect(queue.peek()).toEqual(2);
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('returns false since the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(4);
    expect(queue.isEmpty()).toEqual(false);
  });

  it('can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('dequeue on an empty queue returns exception', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toEqual('Exception');
  });

  it('peek on an empty queue returns exception', () => {
    const queue = new Queue();
    expect(queue.peek()).toEqual('Exception');
  });

});
