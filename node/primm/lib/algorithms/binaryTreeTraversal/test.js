const BinaryTree = require("../../dataStructures/binaryTree/BinaryTree");
const {
  traverseInOrder,
  traversePostOrder,
  traversePreOrder,
} = require("./BinaryTreeTraversal");

test("Binary Tree - Traversal", () => {
  let myTree = new BinaryTree();

  myTree.add("B");
  myTree.add("A");
  myTree.add("D");
  myTree.add("E");
  myTree.add("C");
  myTree.add("F");

  let results = [];
  traverseInOrder(myTree, (n) => results.push(n));
  expect(results).toEqual(["A", "B", "C", "D", "E", "F"]);

  results = []; // clear previous results
  traversePreOrder(myTree, (n) => results.push(n));
  expect(results).toEqual(["B", "A", "D", "C", "E", "F"]);

  results = []; // clear previous results
  traversePostOrder(myTree, (n) => results.push(n));
  expect(results).toEqual(["A", "C", "F", "E", "D", "B"]);
});
