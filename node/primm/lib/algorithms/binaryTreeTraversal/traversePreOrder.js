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

module.exports = traversePreOrder;
