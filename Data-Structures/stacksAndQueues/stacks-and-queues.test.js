const { Stack } = require('./stacks-and-queues.js');

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
