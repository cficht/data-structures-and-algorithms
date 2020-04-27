# Stacks and Queues
Much like Linked Lists, Stacks and Queues use Nodes to create lists. They are quite similar to one another with the exception of the differening methods for adding Nodes. Stack's push method adds a new Node to the top of the stack whereas Queue's enqueue method adds a new Node to the back of the queue, (Stacks are ordered from most recent to the first and Queues are ordered from first to most recent.)

## Challenge
The biggest challenge was changing how the enqueue method adds Nodes.

## Approach & Efficiency
I followed this from top to bottom of the instructions by first writing a test and then it's corresponding method for each feature. Aside from the enqueue method, the Queue methods were nearly identical to the Stack methods. 

## API
### STACK
- push(value): Adds a new node to the top of the stack.
- pop(): Removes the node from the top of the stack and returns the node’s value.
- peek(): Returns the value of the node located on top of the stack.
- isEmpty(): Returns a bool indicating whether or not the stack is empty.
### QUEUE
- enqueue(value): Adds a new node to the back of the queue.
- dequeue(): Removes the node from the front of the queue and returns the node’s value.
- peek(): Returns the value of the node located on front of the queue.
- isEmpty(): Returns a bool indicating whether or not the queue is empty.