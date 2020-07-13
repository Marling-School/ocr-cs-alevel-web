class LinkedItem {
  constructor(value, nextItem) {
    this.value = value;
    this.nextItem = nextItem;
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
  }

  iterator() {
    return new LinkedListIterator(this.startItem);
  }

  insert(index, item) {
    let newItem = new LinkedItem(item);

    if (index === 0) {
      newItem.setNextItem(this.startItem);
      this.startItem = newItem;
      return true;
    } else {
      let tIndex = 1;
      let currentItem = this.startItem;
      while (!!currentItem) {
        if (tIndex === index) {
          newItem.setNextItem(currentItem.getNextItem());
          currentItem.setNextItem(newItem);
          return true;
        }

        tIndex += 1;
        currentItem = currentItem.getNextItem();
      }
    }
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
  }

  remove(index) {
    if (index === 0) {
      if (!!this.startItem) {
        this.startItem = this.startItem.getNextItem();
        return true;
      }
    } else {
      let tIndex = 1;
      let currentItem = this.startItem;
      while (!!currentItem.getNextItem()) {
        if (tIndex === index) {
          let toRemove = currentItem.getNextItem();
          if (!!toRemove) {
            currentItem.setNextItem(toRemove.getNextItem());
            return true;
          }
        }
        currentItem = currentItem.getNextItem();
        tIndex += 1;
      }
    }

    return false;
  }

  toString() {
    let asStr = "";
    let cItem = this.startItem;
    while (!!cItem) {
      asStr += ` ${cItem.getValue()}`;
      cItem = cItem.getNextItem();
    }
    return asStr;
  }
}

module.exports = {
  LinkedList,
};
