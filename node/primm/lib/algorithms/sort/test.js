const bubbleSort = require("./bubbleSort");
const mergeSort = require("./mergeSort");
const insertionSort = require("./insertionSort");
const quickSort = require("./quickSort");
const { arithmeticComparator, generateRandomNumbers } = require("./common");

// Associate each sort algorithm with a name so they can all be tested in same function
let algorithms = [
  { name: "Bubble Sort", sort: bubbleSort },
  {
    name: "Merge Sort",
    sort: mergeSort,
  },
  { name: "Insertion Sort", sort: insertionSort },
  { name: "Quick Sort", sort: quickSort },
];

// Create a test for each algorithm
algorithms.forEach(({ name, sort }) => {
  test(`Sort: ${name}`, () => {
    // Generate a list of random numbers
    let inputList = generateRandomNumbers(0, 100, 20);

    // Execute the sort
    let outputList = sort(inputList, arithmeticComparator);

    // Check all the input numbers are in there somewhere
    expect(outputList.length).toBe(inputList.length);
    inputList.forEach((i) => expect(outputList.includes(i)).toBeTruthy());

    // Check they are in order
    for (let i = 1; i < outputList.length; i++) {
      expect(outputList[i]).toBeGreaterThanOrEqual(outputList[i - 1]);
    }
  });
});
