const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('stack with two elements returns a length of 2', () => {
    while (stack.length>0){
        stack.stackLength.pop();
    };
    stack.push("a");
    stack.push("b");
    expect(stack.stackLength().length).toBeDefined();  
    expect(stack.stackLength().length).toBe(2);  
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});
