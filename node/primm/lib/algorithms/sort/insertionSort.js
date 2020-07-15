function insertionSort(inputList, comparator) {
  if (inputList.length < 2) {
    return inputList;
  }

  // Don't modify the input
  let outputList = [...inputList];

  for (let index = 1; index < outputList.length; index++) {
    let itemToPlace = outputList[index];
    let itemPlace = index;
    while (itemToPlace > 0) {
      let lower = itemPlace - 1;
      let upper = itemPlace;

      comparison = comparator(outputList[lower], outputList[upper]);

      // The comparator returns -1 if the first item is 'greater than' the second one
      if (comparison < 0) {
        // Temporary variable to prevent overwrites
        let swap = outputList[lower];
        outputList[lower] = outputList[upper];
        outputList[upper] = swap;
      } else {
        itemPlace = upper;
        break;
      }

      itemPlace -= 1;
    }
  }

  return outputList;
}

module.exports = insertionSort;
