/**
 * Calculates the area of a triangle, given the base and height
 *
 * @param {number} base The base dimension of the triangle
 * @param {number} height The height of the triangle
 * @return {number} The calculated area
 */
function calculateArea(base, height) {
  console.log("PRINT RED: Inside the calculateArea function");
  let area = (base * height) / 2;
  return area;
}

console.log("PRINT BLUE: Preparing the triangles dimensions");
let myBase = 4;
let myHeight = 7;
let myArea = calculateArea(myBase, myHeight);

console.log(
  `A triangle with base=${myBase}, height=${myHeight} has an area=${myArea}`
);
