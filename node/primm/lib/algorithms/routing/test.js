const Graph = require("../../dataStructures/graph/Graph");
const dijstraks = require("./dijkstras");

test("Routing Algorithms Small Graph", () => {
  let myGraph = new Graph()
    .addLink("A", "B", 5)
    .addLink("A", "C", 4)
    .addLink("B", "D", 3)
    .addLink("C", "D", 7)
    .addLink("D", "E", 2);

  let shortestRoute = dijstraks(myGraph, "A", "E");

  console.log("Shortest Routes", shortestRoute);
});

// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
test("Routing Algorithms Larger Graph", () => {
  let myGraph = new Graph()
    .addLink("0", "1", true, 4)
    .addLink("0", "7", true, 8)
    .addLink("1", "2", true, 8)
    .addLink("1", "7", true, 11)
    .addLink("2", "3", true, 7)
    .addLink("2", "8", true, 2)
    .addLink("2", "5", true, 4)
    .addLink("3", "4", true, 9)
    .addLink("3", "5", true, 14)
    .addLink("4", "5", true, 10)
    .addLink("5", "6", true, 2)
    .addLink("6", "7", true, 1)
    .addLink("6", "8", true, 6)
    .addLink("7", "8", true, 7);

  let shortestRoute = dijstraks(myGraph, "0", "4");

  console.log("Shortest Routes", shortestRoute);

  //   Shortest Routes {
  //     '0': { node: '0', viaNode: undefined, distanceFromSource: 0 },
  //     '1': { node: '1', distanceFromSource: 4, viaNode: '0' },
  //     '2': { node: '2', distanceFromSource: 12, viaNode: '1' },
  //     '3': { node: '3', distanceFromSource: 19, viaNode: '2' },
  //     '4': { node: '4', distanceFromSource: 21, viaNode: '5' },
  //     '5': { node: '5', distanceFromSource: 11, viaNode: '6' },
  //     '6': { node: '6', distanceFromSource: 9, viaNode: '7' },
  //     '7': { node: '7', distanceFromSource: 8, viaNode: '0' },
  //     '8': { node: '8', distanceFromSource: 14, viaNode: '2' }
  //   }
});
