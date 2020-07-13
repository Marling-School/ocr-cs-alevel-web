let myGameLibrary = [
  {
    name: "The Witness",
    genre: "puzzle",
  },
  {
    name: "Mario Galaxy",
    genre: "platform",
  },
  {
    name: "Beat Sabre",
    genre: "rhythm",
  },
  {
    name: "Tetris",
    genre: "puzzle",
  },
  {
    name: "DJ Hero",
    genre: "rhythm",
  },
  {
    name: "Rayman Legends",
    genre: "platform",
  },
];

// Use a filter, destructure the genre and filter for platform games.
console.log("Only the platform games");
myGameLibrary
  .filter(({ genre }) => genre === "platform") // destructure 'genre' for filtering
  .forEach(({ name }) => console.log(name)); // destructure 'name' for printing
