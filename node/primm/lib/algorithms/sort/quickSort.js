/* 
    This code was lifted from 
    https://www.geeksforgeeks.org/quick-sort/

    And converted from pseudo code to JavaScript.
*/

function swap(arr, from, to) {
  let swap = arr[from];
  arr[from] = arr[to];
  arr[to] = swap;
}

/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, comparator, low, high) {
  // pivot (Element to be placed at right position)
  pivot = arr[high];

  let i = low - 1; // Index of smaller element

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    if (comparator(arr[j], pivot) > 0) {
      i++; // increment index of smaller element
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSortRecurse(arr, comparator, low, high) {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is now
           at right place */
    pi = partition(arr, comparator, low, high);

    quickSortRecurse(arr, comparator, low, pi - 1); // Before pi
    quickSortRecurse(arr, comparator, pi + 1, high); // After pi
  }
}

function quickSort(inputList, comparator) {
  if (inputList.length < 2) {
    return inputList;
  }

  let outputList = [...inputList];

  quickSortRecurse(outputList, comparator, 0, inputList.length - 1);

  return outputList;
}

module.exports = quickSort;
