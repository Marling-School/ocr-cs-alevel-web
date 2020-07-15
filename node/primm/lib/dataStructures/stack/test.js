const Stack = require("./Stack");

test("Stacking Numbers", () => {
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

  expect(a).toBe(10);
  expect(b).toBe(54);
  expect(c).toBe(2);
  expect(d).toBe(6);
  expect(e).toBe(13);
  expect(f).toBe(28);
  expect(g).toBe(19);
  expect(h).toBe(21);
});

test("Stacking Names", () => {
  let myStack2 = new Stack(5);
  myStack2.push("Joe");
  myStack2.push("Kate");
  let x = myStack2.pop();
  myStack2.push("Tom");
  let y = myStack2.pop();
  let z = myStack2.pop();
  expect(x).toBe("Kate");
  expect(y).toBe("Tom");
  expect(z).toBe("Joe");
});
