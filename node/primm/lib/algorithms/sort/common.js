function swap(arr, from, to) {
  let swap = arr[from];
  arr[from] = arr[to];
  arr[to] = swap;
}

function arithmeticComparator(a, b) {
  return b - a;
}

/**
 * Generate a list of random numbers in array of given length
 * @param {number} length
 * @return {array} the list of random numbers
 */
function generateRandomNumbers(from, to, length) {
  return Array(length)
    .fill(null)
    .map((i) => from + Math.floor((to - from) * Math.random()));
}

module.exports = {
  swap,
  arithmeticComparator,
  generateRandomNumbers,
};
