const { NO_MATCH } = require("./common");

/**
 * perform a linear search on an array
 *
 * @param {array} data The array
 * @param {function} compare Accepts each item and
 *  returns 0 if its a match,
 * -ve if the item is 'less than'
 * +ve if item is 'greater than'
 * @return {object} The matching item in the array
 */
function linearSearch(data, compare) {
  for (let i = 0; i < data.length; i++) {
    if (compare(data[i]) === 0) {
      return i;
    }
  }

  return NO_MATCH;
}

module.exports = linearSearch;
