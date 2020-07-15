const { swap } = require("./common");

function bubbleSort(inputList, comparator) {
  let outputList = [...inputList];

  for (let top = outputList.length - 1; top > 0; top--) {
    let anySwapsMade = false;
    for (let current = 0; current < top; current++) {
      if (comparator(outputList[current], outputList[current + 1]) < 0) {
        swap(outputList, current, current + 1);
        anySwapsMade = true;
      }
    }

    if (!anySwapsMade) break;
  }

  return outputList;
}

module.exports = bubbleSort;
