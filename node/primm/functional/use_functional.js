// Give ourself a list of numbers
my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`My Numbers ${my_numbers}`);

// Define some functions
let square = x => x * x;
let is_even = x => x % 2 == 0;
let sum = (x, y) => x + y;

// Demo Mapping to squares
my_squares = my_numbers.map(square);
console.log(`My Squares ${my_squares}`);

// Demo filtering in even numbers
my_even_numbers = my_numbers.filter(is_even);
console.log(`My Even Numbers ${my_even_numbers}`);

// Demo reducing as a sum
sum_all = my_numbers.reduce(sum, 0);
console.log(`My Sum ${sum_all}`);

// Demo chaining mapping into filtering
even_squares = my_numbers.map(square).filter(is_even);
console.log(`Even Squares ${even_squares}`);
