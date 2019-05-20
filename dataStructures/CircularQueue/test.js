const { CircularQueue } = require("./CircularQueue");

test("Queuing Numbers", () => {
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

  expect(a).toBe(5);
  expect(b).toBe(7);
  expect(c).toBe(10);
  expect(d).toBe(13);
  expect(e).toBe(54);
  expect(f).toBe(2);
  expect(g).toBe(6);
  expect(h).toBe(13);
});
