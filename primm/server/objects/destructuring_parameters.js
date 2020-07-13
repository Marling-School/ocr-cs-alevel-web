/**
 * This function accepts a character (object with properties name and species)
 * It then prints the name and species
 *
 * @param {character} The character to print
 */
function printNameAndSpecies1(character) {
  console.log(`The character ${character.name} is a ${character.species}`);
}

/**
 * This function accepts a character (object with properties name and species)
 * It then prints the name and species
 *
 * Note the use of destructuring in the parameter being passed into the function
 *
 * @param {character} The character to print
 */
function printNameAndSpecies2({ name, species }) {
  console.log(`The character ${name} is a ${species}`);
}

let ringBearer = {
  name: "Frodo Baggins",
  species: "Hobbit",
  gender: "Male",
  age: 55,
};

printNameAndSpecies1(ringBearer);
printNameAndSpecies2(ringBearer);
