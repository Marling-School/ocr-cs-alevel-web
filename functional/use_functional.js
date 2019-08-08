my_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`My Numbers ${my_numbers}`);

my_squares = my_numbers.map(x => x * x);
console.log(`My Squares ${my_squares}`);

my_even_numbers = my_numbers.filter(x => x % 2 == 0);
console.log(`My Even Numbers ${my_even_numbers}`);

sum_all = my_numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`My Sum ${sum_all}`);
