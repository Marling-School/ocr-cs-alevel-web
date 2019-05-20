const { Stack } = require('./Stack');

let myStack = new Stack(5);
myStack.push(5);
myStack.push(7);
myStack.push(10);
let a = myStack.pop();
myStack.push(21);
myStack.push(54);
let b = myStack.pop();
myStack.push(2);
let c = myStack.pop();
myStack.push(6);
let d = myStack.pop();
myStack.push(13);
let e = myStack.pop();
myStack.push(19);
myStack.push(28);
let f = myStack.pop();
let g = myStack.pop();
let h = myStack.pop();
console.log('Stack 1 Result', { a, b, c, d, e, f, g, h, myStack })

let myStack2 = new Stack(5);
myStack2.push('Joe');
myStack2.push('Kate');
let w = myStack2.pop()
myStack2.push('Tom');
let x = myStack2.pop();
let y = myStack2.pop();
console.log('Stack Two Result', { w, x, y, myStack2 })