const BinaryTree = require("./BinaryTree");

test("Binary Tree - Contains", () => {
  let myTree = new BinaryTree();

  myTree.add("B");
  myTree.add("A");
  myTree.add("D");
  myTree.add("E");
  myTree.add("C");
  myTree.add("F");

  let positive = myTree.contains("C");
  let negative = myTree.contains("X");

  expect(positive).toBe(true);
  expect(negative).toBe(false);
});
