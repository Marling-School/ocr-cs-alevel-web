// Create a list of names, this data structure is also known as an 'array'.
names = ["Dave", "Rimmer", "Cat", "Kryten", "Holly"];

// Provide some context for the following list
console.log("Here are the members of the Red Dwarf Crew");

/*
    Using a forEach loop on our list of names
    this is a function we can call on an array/list
    allowing us to do something with each item in the array
*/
names.forEach(function (name) {
  console.log(name);
});
