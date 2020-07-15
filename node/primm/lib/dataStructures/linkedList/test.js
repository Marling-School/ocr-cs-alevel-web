const { LinkedList } = require("./LinkedList");

test("Linked List", () => {
  let myList = new LinkedList();
  myList.append("Joe"); // Joe
  myList.append("Kate"); // Joe, Kate
  myList.insert(1, "Indigo"); // Joe, Indigo, Kate
  myList.insert(1, "Tom"); // Joe, Tom, Indigo, Kate
  myList.append("Kirsten"); // Joe, Tom, Indigo, Kate, Kirsten

  at0 = myList.get(0);
  at1 = myList.get(1);
  at2 = myList.get(2);
  at3 = myList.get(3);
  at4 = myList.get(4);
  expect(at0).toBe("Joe");
  expect(at1).toBe("Tom");
  expect(at2).toBe("Indigo");
  expect(at3).toBe("Kate");
  expect(at4).toBe("Kirsten");

  remove2 = myList.remove(2);
  expect(remove2).toBe(true);
  at2_again = myList.get(2);
  expect(at2_again).toBe("Kate");
});
