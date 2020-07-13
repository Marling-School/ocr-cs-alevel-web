const people = [
  {
    name: "Joe",
    age: 37,
  },
  {
    name: "Vicki",
    age: 27,
  },
  {
    name: "Sarah",
    age: 51,
  },
  {
    name: "Tom",
    age: 6,
  },
  {
    name: "Indigo",
    age: 2,
  },
  {
    name: "Scott",
    age: 17,
  },
];

const adults = people.filter((p) => p.age >= 18);
console.log("The Adults are");
adults.forEach((a) => console.log(a));

console.log("The Children are");
people.filter((p) => p.age < 18).forEach((p) => console.log(p));
