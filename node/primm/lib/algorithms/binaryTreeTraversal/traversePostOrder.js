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

module.exports = traversePostOrder;
