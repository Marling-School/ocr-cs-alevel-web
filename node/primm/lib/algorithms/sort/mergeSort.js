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
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    // Comparator returns -1 if the first item is larger than first
    if (comparator(firstHalf[0], secondHalf[0]) < 0) {
      outputList.push(secondHalf.splice(0, 1)[0]);
    } else {
      outputList.push(firstHalf.splice(0, 1)[0]);
    }
  }

  // Push any stragglers from whichever list has items remaining
  firstHalf.forEach((i) => outputList.push(i));
  secondHalf.forEach((i) => outputList.push(i));

  return outputList;

  // # Merge the two halves into a single sorted list
  // output_list: List[Sortable] = []
  // while (len(first_half) > 0) and (len(second_half) > 0):
  //     # Comparator returns -1 if the first item is 'larger than' the first
  //     comparison: int = comparator(first_half[0], second_half[0])
  //     if comparison < 0:
  //         output_list.append(second_half.pop(0))
  //     else:
  //         output_list.append(first_half.pop(0))
}

function mergeSort(inputList, comparator) {
  if (inputList.length === 0) {
    return inputList;
  }

  return mergeSortRecurse(inputList, comparator);
}

module.exports = mergeSort;
