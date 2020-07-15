const { CircularQueue } = require("./CircularQueue");
const { PriorityQueue } = require("./PriorityQueue");
const Queue = require("./Queue");

test("Queue", () => {
  let myQueue = new Queue();
  myQueue.enqueue(5);
  myQueue.enqueue(7);
  myQueue.enqueue(10);
  let a = myQueue.dequeue();
  myQueue.enqueue(13);
  myQueue.enqueue(54);
  let b = myQueue.dequeue();
  myQueue.enqueue(2);
  let c = myQueue.dequeue();
  myQueue.enqueue(6);
  let d = myQueue.dequeue();
  myQueue.enqueue(19);
  let e = myQueue.dequeue();
  myQueue.enqueue(27);
  myQueue.enqueue(28);
  let f = myQueue.dequeue();
  let g = myQueue.dequeue();
  let h = myQueue.dequeue();

  expect(a).toBe(5);
  expect(b).toBe(7);
  expect(c).toBe(10);
  expect(d).toBe(13);
  expect(e).toBe(54);
  expect(f).toBe(2);
  expect(g).toBe(6);
  expect(h).toBe(19);
});

test("Priority Queue", () => {
  let myQueue = new PriorityQueue();

  myQueue.enqueue("Indigo", 10);
  myQueue.enqueue("Joe", 4);
  myQueue.enqueue("Kate", 7);
  let a = myQueue.dequeue();
  myQueue.enqueue("Tom", 9);
  myQueue.enqueue("Kirsten", 3);
  let b = myQueue.dequeue();
  myQueue.enqueue("Nina", 4);
  let c = myQueue.dequeue();
  myQueue.enqueue("Gaz", 5);
  let d = myQueue.dequeue();
  myQueue.enqueue("Steve", 1);
  let e = myQueue.dequeue();
  myQueue.enqueue("Louise", 8);
  myQueue.enqueue("Chris", 7);
  let f = myQueue.dequeue();
  let g = myQueue.dequeue();
  let h = myQueue.dequeue();

  expect(a).toEqual({ item: "Indigo", priority: 10 });
  expect(b).toEqual({ item: "Tom", priority: 9 });
  expect(c).toEqual({ item: "Kate", priority: 7 });
  expect(d).toEqual({ item: "Gaz", priority: 5 });
  expect(e).toEqual({ item: "Joe", priority: 4 });
  expect(f).toEqual({ item: "Louise", priority: 8 });
  expect(g).toEqual({ item: "Chris", priority: 7 });
  expect(h).toEqual({ item: "Nina", priority: 4 });
});

test("Circular Queue", () => {
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
  myCQ.enqueue(19);
  let e = myCQ.dequeue();
  myCQ.enqueue(27);
  myCQ.enqueue(28);
  let f = myCQ.dequeue();
  let g = myCQ.dequeue();
  let h = myCQ.dequeue();

  expect(a).toBe(5);
  expect(b).toBe(7);
  expect(c).toBe(10);
  expect(d).toBe(13);
  expect(e).toBe(54);
  expect(f).toBe(2);
  expect(g).toBe(6);
  expect(h).toBe(19);
});
