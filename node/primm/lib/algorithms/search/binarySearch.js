const { NO_MATCH } = require("./common");

// https://www.geeksforgeeks.org/binary-search/
function binarySearchRecurse(data, compare, left, right) {
  if (right >= left) {
    let mid = Math.floor(left + (right - left) / 2);

    let compareMid = compare(data[mid]);

    // If the element is present in the middle itself
    if (compareMid === 0) {
      return mid;
    } else if (compareMid < 0) {
      // If element is smaller than mid, then
      // it can only be present in left subarray
      return binarySearchRecurse(data, compare, left, mid - 1);
    } else {
      // Else the element can only be present
      // in right subarray
      return binarySearchRecurse(data, compare, mid + 1, right);
    }
  }

  return NO_MATCH;
}

/**
 * perform a binary search on an array
 *
 * @param {array} data The array
 * @param {function} compare Accepts each item and
 *  returns 0 if its a match,
 * -ve if the item is 'less than'
 * +ve if item is 'greater than'
 * @return {object} The index of the matching item
 */
function binarySearch(data, compare) {
  return binarySearchRecurse(data, compare, 0, data.length - 1);
}

module.exports = binarySearch;
