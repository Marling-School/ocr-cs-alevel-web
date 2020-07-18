const binarySearch = require("./binarySearch");
const linearSearch = require("./linearSearch");
const { NO_MATCH } = require("./common");
const { generateRandomNumbers } = require("../sort/common");

let algorithms = [
  {
    name: "Binary Search",
    search: binarySearch,
  },
  {
    name: "Linear Search",
    search: linearSearch,
  },
];

algorithms.forEach(({ name, search }) => {
  test(`${name} - Numbers`, () => {
    // Generate a list of random numbers
    let inputList = generateRandomNumbers(0, 100, 20);
    inputList.sort((a, b) => a - b);

    // Search for some specific indices
    [1, 10, 14, 19].forEach((index) => {
      // Search for the 15th one
      let result = search(inputList, (d, i) => inputList[index] - d);

      // If the number matches twice, the indexes may not match
      expect(inputList[result]).toBe(inputList[index]);
    });

    // Search with criteria that will never match
    let indexNoMatch = search(inputList, () => false);
    expect(indexNoMatch).toBe(NO_MATCH);
  });
});
