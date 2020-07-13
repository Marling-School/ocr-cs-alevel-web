/**
 * Let's get really fancy
 *
 * After defining a constant, we then have a single line of code that does the following
 * * generates an array
 * * fills the array with 'null' values
 * * Replaces these values by calculating a number, effectively counting down
 * * Uses each value to generate a line in the song
 * * Prints the line in the song
 *
 * This is an example of method chaining, with the arrow functions embedded directly.
 * This is often referred to as 'functional programming style' due to the use of functions
 * as arguments.
 *
 * https://www.toptal.com/javascript/functional-programming-javascript
 * https://blog.bitsrc.io/functional-programming-in-javascript-how-and-why-94e7a97343b
 */
const startingNumber = 10; // Define this once so we can use it to count backwards
Array(startingNumber)
  .fill(null) // fill the array with 'nulls', they will be replaced...
  .map((shouldBeNull, i) => startingNumber - i) // use the index of the item to generate a value
  .map((x) => `${x} green bottles`) // Use each number to build a string
  .map((s) => console.log(s)); // Print the string
