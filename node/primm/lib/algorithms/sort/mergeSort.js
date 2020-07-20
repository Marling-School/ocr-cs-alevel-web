function mergeSortRecurse(inputList, comparator, leftPointer, rightPointer) {
  if (leftPointer === rightPointer) {
    return [inputList[leftPointer]];
  }

  // Calculate the mid point
  let middle = Math.floor((leftPointer + rightPointer) / 2);

  // Recurse sort both halves to yield the two lists to merge
  let firstHalf = mergeSortRecurse(inputList, comparator, leftPointer, middle);
  let secondHalf = mergeSortRecurse(
    inputList,
    comparator,
    middle + 1,
    rightPointer
  );

  // Merge the two halves into a single sorted list
  let outputList = [];
  let firstPtr = 0;
  let secondPtr = 0;
  while (firstPtr < firstHalf.length && secondPtr < secondHalf.length) {
    // Comparator returns +ve if the second item is larger than first
    if (comparator(firstHalf[firstPtr], secondHalf[secondPtr]) > 0) {
      outputList.push(secondHalf[secondPtr]);
      secondPtr += 1;
    } else {
      outputList.push(firstHalf[firstPtr]);
      firstPtr += 1;
    }
  }

  // Push any stragglers from whichever list has items remaining
  firstHalf.filter((_, i) => i >= firstPtr).forEach((i) => outputList.push(i));
  secondHalf
    .filter((_, i) => i >= secondPtr)
    .forEach((i) => outputList.push(i));

  return outputList;
}

function mergeSort(inputList, comparator) {
  if (inputList.length < 2) {
    return inputList;
  }

  return mergeSortRecurse(inputList, comparator, 0, inputList.length - 1);
}

module.exports = mergeSort;
