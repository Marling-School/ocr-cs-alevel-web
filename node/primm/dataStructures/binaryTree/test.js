const { BinaryTree } = require("./BinaryTree");
const {
  traverseInOrder,
  traversePostOrder,
  traversePreOrder,
} = require("./Traversals");

const strToLeft = (a, b) => a < b;

test("Binary Tree - Contains", () => {
  let myTree = new BinaryTree(strToLeft);

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

test("Binary Tree - Traversal", () => {
  let myTree = new BinaryTree(strToLeft);

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

// def test_adj_list_graph(self):
// my_tree: BinaryTree[str] = BinaryTree(str_is_to_left)

// my_tree.add('B')
// my_tree.add('A')
// my_tree.add('D')
// my_tree.add('E')
// my_tree.add('C')
// my_tree.add('F')

// print("My Binary Tree:{}".format(my_tree))

// for t in [TraversePreOrder, TraverseInOrder, TraversePostOrder]:
//     traverse: t[str] = t()
//     print("Traversing {}".format(traverse.get_name()))
//     traverse.traverse(my_tree, lambda x: print(x, end=", "))
//     print("")
