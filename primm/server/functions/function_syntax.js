var assert = require("assert");

/**
 * Squares the given number and returns the result
 *
 * @param {number} input The number to square
 * @return {number} The result
 */
function square1(input) {
  let inputSquared = input * input;
  return inputSquared;
}

/**
 * Squares the given number and returns the result
 *
 * Uses JavaScript arrow functions, with a function body
 * wrapped in curly braces {}
 *
 * @param {input} input The number to square
 */
const square2 = (input) => {
  let inputSquared = input * input;
  return inputSquared;
};

/**
 * Squares the given number and returns the result
 *
 * Uses the arrow function expression syntax,
 * if the return value can be calculated in a single expression,
 * the result of the expression becomes the return value.
 *
 * @param {number} input The number to square
 */
const square3 = (input) => input * input;

/**
 * This code will demonstrate that all 3 functions behave the same
 */
let myInput = 7;
let myExpectedOutput = 49;

let mySquare1 = square1(myInput);
let mySquare2 = square2(myInput);
let mySquare3 = square3(myInput);

// check that the functions return as expected
assert(
  mySquare1 === myExpectedOutput,
  `square1 calculated incorrect value: ${mySquare1}`
);
assert(
  mySquare2 === myExpectedOutput,
  `square2 calculated incorrect value: ${mySquare2}`
);
assert(
  mySquare3 === myExpectedOutput,
  `square3 calculated incorrect value: ${mySquare3}`
);

console.log("All Tests Passed");
