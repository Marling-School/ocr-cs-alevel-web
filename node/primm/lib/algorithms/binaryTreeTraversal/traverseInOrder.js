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

module.exports = traverseInOrder;
