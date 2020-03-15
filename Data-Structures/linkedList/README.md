# Singly Linked List
Simple Node and Linked List classes that can be used to create Linked Lists. These can have any number of Nodes added to them. They are sorted in order from the most recent inserted value to the first inserted value.

## Challenge
The biggest challenge of this challenge was figuring out the best way to test the Linked List methods.

## Approach & Efficiency
The approach I took was to create a simple Linked List class that could accept any value. I'm assuming the Big O space/time shouldn't be an issue as the values entered are only ever iterated as whole values, but I'm still not clear on what Big O actually is.

## API
- insert(value): Used to add a new node to the Linked List.
- includes(value): Used to see if a value is in a Linked List. Returns true if it is, false if it is not.
- toString(): Returns a string of all the values in the Linked List.