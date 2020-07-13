// Load in our database of characters
const characters = require("./characters.json");

console.log("Let's just find the members of the Simpson Family");
characters
  .filter(({ name }) => name.includes("Simpson"))
  .forEach(({ name }) => console.log(name));
