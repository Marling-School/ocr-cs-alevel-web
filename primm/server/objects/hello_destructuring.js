let ringBearer = {
  name: "Frodo Baggins",
  species: "Hobbit",
  gender: "Male",
  age: 55,
};

// This shows destructuring to 'read' specific properties of an object
const { name, age } = ringBearer;

// Note that I do not have to use the dot notation on the object
// I have already extracted the interesting properties on the line above
console.log(`${name} is ${age} years old`);
