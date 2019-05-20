const { CircularQueue } = require('./CircularQueue');

let myCQ = new CircularQueue(5);
myCQ.enqueue(5);
myCQ.enqueue(7);
myCQ.enqueue(10);
let a = myCQ.dequeue();
myCQ.enqueue(13);
myCQ.enqueue(54);
let b = myCQ.dequeue();
myCQ.enqueue(2);
let c = myCQ.dequeue();
myCQ.enqueue(6);
let d = myCQ.dequeue();
myCQ.enqueue(13);
let e = myCQ.dequeue();
myCQ.enqueue(19);
myCQ.enqueue(28);
let f = myCQ.dequeue();
let g = myCQ.dequeue();
let h = myCQ.dequeue();
console.log('enqueueed 3 items, then dequeueped', { a, b, c, d, e, f, g, h })