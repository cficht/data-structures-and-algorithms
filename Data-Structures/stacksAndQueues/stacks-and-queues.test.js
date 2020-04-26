const { Stack } = require('./stacks-and-queues.js');

describe('testing stacks-and-queues.js', () => {

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

  it('returns exception when emptying a stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.pop();
    stack.pop();
    expect(stack.pop()).toEqual('Exception');
  });

});
