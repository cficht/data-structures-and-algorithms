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

});
