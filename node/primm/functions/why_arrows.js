// A list of numbers to manipulate
let someNumbers = [4, 5, 8, 2, 3, 12];

// The 'map' function on an array, executes the given function and the return
// value is used to populate a new array
let someNumbersSq = someNumbers.map((x) => x * x);

// Print the items inside this new array
console.log("The Numbers Squared");
someNumbersSq.forEach((xs) => console.log(xs));

// Calls like map and forEach can be chained
console.log("The Numbers Cubed");
someNumbers.map((x) => Math.pow(x, 3)).forEach((xc) => console.log(xc));
