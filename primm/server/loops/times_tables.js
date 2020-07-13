console.log("Here are the times tables...");

// Define the limits of our times table
const START_NUMBER = 1;
const END_NUMBER = 4;

// a and b will be used as the two numbers to multiply
for (let a = START_NUMBER; a <= END_NUMBER; a++) {
  console.log(`${a} Times Table`);
  for (let b = START_NUMBER; b <= END_NUMBER; b++) {
    // Calculate the answer and print the entire equation
    let ab = a * b;
    console.log(`${a} x ${b} = ${ab}`);
    // Same print statement, using string concatenation
    //console.log(a + " x " + b + " = " + ab);
  }
  console.log("----");
}
