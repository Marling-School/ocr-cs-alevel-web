/**
 * Calculate the hypotenuse of a right angle triangle
 * given the two sides that are at right angles.
 *
 * a^2 + b^2 = c^2
 * https://www.mathsisfun.com/pythagoras.html
 *
 * @param {number} width The width of the triangle
 * @param {number} height The height of the triangle
 */
function calculateHypotenuse(width, height) {
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

/**
 * Calculate the percentage error between a known value and a given measurement of that value.
 *
 * @param {number} actual The accurate known value of the quantity
 * @param {number} measured The value measured
 * @return {number} The absolute value of the percentage error between the known quantity and the measurement
 */
function calculatePercentError(actual, measured) {
  let error = (measured - actual) / actual;
  error *= 100; // make into a percentage error
  error = Math.abs(error); // remove any sign
  return error;
}

/**
 * Calculates the value of PI using the monte carlo method
 *
 * Area of circle = pi * r^2
 * Area of square = (2r)^2
 *
 * circle / square = (pi * r^2) / 4(r^2) = pi / 4
 * 4 * (dots in circle) / (dots total) = pi
 *
 * Randomly generate dots within the square, if dots are inside a radius of 1 from the centre they are counted.
 * The chance of a random dot being within the circle can be used to estimate a value for PI using the equations above.
 *
 * @param {number} numberOfDataPoints The number of data points to use
 * @return {number} an estimate for the value of PI
 */
function estimatePi(numberOfDataPoints) {
  let pointsInsideCircle = 0;

  for (let x = 0; x < numberOfDataPoints; x++) {
    // Generate a data point anywhere within a unit square about the origin
    let dataPointX = Math.random() - 0.5;
    let dataPointY = Math.random() - 0.5;

    // Is this point within the radius of the circle?
    let radius = calculateHypotenuse(dataPointX, dataPointY);

    if (radius < 0.5) {
      pointsInsideCircle++;
    }
  }

  // Estimate PI by using the formula derived from the areas of the circle and square.
  let pi = 4.0 * (pointsInsideCircle / numberOfDataPoints);
  return pi;
}

console.log(`Known Actual Value of PI: ${Math.PI}`);

const NUMBER_DATA_POINTS = 1000;
let myPi = estimatePi(NUMBER_DATA_POINTS);
let absPercentError = calculatePercentError(Math.PI, myPi);

console.log(
  `Estimate of PI: ${myPi}, after ${NUMBER_DATA_POINTS} data points, percent error: ${absPercentError} %`
);
