class LinkedListIterator {
  constructor(item) {
    this.item = item;
  }

  next() {
    console.log("Called next");

    let item = this.item;
    this.item = item && item.nextItem;

    return {
      value: item,
      done: item && item.nextItem,
    };
  }
}

class LinkedItem {
  constructor(value, nextItem) {
    this.value = value;
    this.nextItem = nextItem;
  }

  next() {
    return {
      value: this.value,
      done: this.nextItem !== undefined,
    };
  }

  setNextItem(item) {
    this.nextItem = item;
  }

  getNextItem() {
    return this.nextItem;
  }

  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.startItem = undefined;
    this.length = 0;
  }

  *[Symbol.iterator]() {
    let cItem = this.startItem;
    while (!!cItem) {
      yield cItem.getValue();
      cItem = cItem.getNextItem();
    }
  }

  toArray() {
    let arr = [];
    for (let i of this) {
      arr.push(i);
    }
    return arr;
  }

  insert(index, item) {
    let inserted = false;
    let newItem = new LinkedItem(item);

    if (index === 0) {
      newItem.setNextItem(this.startItem);
      this.startItem = newItem;
      inserted = true;
    } else {
      let tIndex = 1;
      let currentItem = this.startItem;
      while (!!currentItem) {
        if (tIndex === index) {
          newItem.setNextItem(currentItem.getNextItem());
          currentItem.setNextItem(newItem);
          inserted = true;
          break;
        }

        tIndex += 1;
        currentItem = currentItem.getNextItem();
      }
    }

    if (inserted) this.length += 1;

    return inserted;
  }

  get(index) {
    let tIndex = 0;
    let cItem = this.startItem;
    while (!!cItem) {
      if (tIndex === index) {
        return cItem.getValue();
      }
      cItem = cItem.getNextItem();
      tIndex += 1;
    }

    return undefined;
  }

  append(item) {
    let newItem = new LinkedItem(item);

    if (!!this.startItem) {
      let currentItem = this.startItem;

      while (!!currentItem.getNextItem()) {
        currentItem = currentItem.getNextItem();
      }

      currentItem.setNextItem(newItem);
    } else {
      this.startItem = newItem;
    }

    this.length += 1;
  }

  /**
   * Removes
   * @param {function} matchFunction Returns true for the object being removed
   * @returns The removed item
   */
  removeMatch(matchFunction) {
    let removed = undefined;
    let index = 0;
    let cItem = this.startItem;
    while (!!cItem) {
      if (matchFunction(cItem.getValue())) {
        removed = this.remove(index);
        break;
      }
      cItem = cItem.getNextItem();
      index += 1;
    }

    return removed;
  }

  /**
   * Remove an item in a specific position
   * @param {number} index The index of the object to remove
   * @returns The removed item
   */
  remove(index) {
    let removed = undefined;

    if (index === 0) {
      if (!!this.startItem) {
        removed = this.startItem.getValue();
        this.startItem = this.startItem.getNextItem();
      }
    } else {
      let tIndex = 1;
      let currentItem = this.startItem;
      while (!!currentItem.getNextItem()) {
        if (tIndex === index) {
          let toRemove = currentItem.getNextItem();
          if (!!toRemove) {
            removed = toRemove.getValue();
            currentItem.setNextItem(toRemove.getNextItem());
            break;
          }
        }
        currentItem = currentItem.getNextItem();
        tIndex += 1;
      }
    }

    if (removed) {
      this.length -= 1;
    }

    return removed;
  }

  toString() {
    // return [this].reduce((acc, curr) => (acc += ` ${curr.getValue()}`), "");
    let arr = [];
    for (let i of this) {
      arr.push(i);
    }
    return arr.join(" ");
  }
}

module.exports = LinkedList;
