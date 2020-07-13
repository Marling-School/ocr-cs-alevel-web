// This is a variable, of type object
let aPerson = {
  name: "Homer Simpson",
  age: 39,
  wife: {
    name: "Marge Simpson",
    age: 39,
  },
  children: [
    {
      name: "Bart Simpson",
      age: 10,
    },
    {
      name: "Lisa Simpson",
      age: 8,
    },
    {
      name: "Maggie Simpson",
      age: 1,
    },
  ],
};

// Print basic details, using the dot notation to access properties on the object
console.log(`${aPerson.name} is ${aPerson.age} years old`);

// Dot notation can be used to navigate into nested objects
console.log(`They are married to ${aPerson.wife.name}`);

// This children property is a list, so we can loop through those too
console.log("Here are the children");
aPerson.children.forEach((child) => {
  console.log(`${child.name} is ${child.age} years old`);
});
