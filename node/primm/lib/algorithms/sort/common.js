function swap(arr, from, to) {
  let swap = arr[from];
  arr[from] = arr[to];
  arr[to] = swap;
}

module.exports = {
  swap,
};
