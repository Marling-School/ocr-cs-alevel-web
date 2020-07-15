class BinaryTree {
  constructor(value, isToLeft = (a, b) => a < b) {
    this.isToLeft = isToLeft;
    this.value = value;
    this.leftBranch = null;
    this.rightBranch = null;
  }

  toString() {
    return `(${this.leftBranch && this.leftBranch.toString()} ${this.value} ${
      this.rightBranch && this.rightBranch.toString()
    })`;
  }

  contains(item) {
    if (this.value === item) {
      return true;
    } else if (this.leftBranch && this.leftBranch.contains(item)) {
      return true;
    } else if (this.rightBranch && this.rightBranch.contains(item)) {
      return true;
    }

    return false;
  }

  add(item) {
    if (this.value === undefined) {
      this.value = item;
    } else if (this.isToLeft(item, this.value)) {
      if (!!this.leftBranch) {
        this.leftBranch.add(item);
      } else {
        this.leftBranch = new BinaryTree(item, this.isToLeft);
      }
    } else {
      if (!!this.rightBranch) {
        this.rightBranch.add(item);
      } else {
        this.rightBranch = new BinaryTree(item, this.isToLeft);
      }
    }
  }
}

module.exports = BinaryTree;
