my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`My Numbers ${my_numbers}`);

// Define some functions
let square = x => x * x;
let is_even = x => x % 2 == 0;
let sum = (x, y) => x + y;

my_squares = my_numbers.map(square);
console.log(`My Squares ${my_squares}`);

my_even_numbers = my_numbers.filter(is_even);
console.log(`My Even Numbers ${my_even_numbers}`);

sum_all = my_numbers.reduce(sum, 0);
console.log(`My Sum ${sum_all}`);

even_squares = my_numbers.map(square).filter(is_even);
console.log(`Even Squares ${even_squares}`);
