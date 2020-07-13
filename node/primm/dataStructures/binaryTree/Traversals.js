function traverseInOrder(tree, visit) {
  if (!!tree.leftBranch) {
    traverseInOrder(tree.leftBranch, visit);
  }
  if (!!tree.value) {
    visit(tree.value);
  }
  if (!!tree.rightBranch) {
    traverseInOrder(tree.rightBranch, visit);
  }
}

function traversePreOrder(tree, visit) {
  if (!!tree.value) {
    visit(tree.value);
  }
  if (!!tree.leftBranch) {
    traversePreOrder(tree.leftBranch, visit);
  }
  if (!!tree.rightBranch) {
    traversePreOrder(tree.rightBranch, visit);
  }
}

function traversePostOrder(tree, visit) {
  if (!!tree.leftBranch) {
    traversePostOrder(tree.leftBranch, visit);
  }
  if (!!tree.rightBranch) {
    traversePostOrder(tree.rightBranch, visit);
  }
  if (!!tree.value) {
    visit(tree.value);
  }
}

module.exports = {
  traverseInOrder,
  traversePreOrder,
  traversePostOrder,
};
