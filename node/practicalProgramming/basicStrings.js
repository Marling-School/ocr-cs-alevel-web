myName = "Joe";

console.log(`My Name is ${myName}`);
console.log("How do you spell that?");
for (const c of myName) {
  console.log(c);
}

console.log(`First character is ${myName[0]}`);
console.log(`Last character is ${myName[myName.length - 1]}`);
console.log(`Length of name is ${myName.length}`);
