const Graph = require("../../dataStructures/graph/Graph");
const dijstraks = require("./dijkstras");

test("Routing Algorithms", () => {
  // Build the graph shown in (a=0, b=1 ...)
  // https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
  let myGraph = new Graph();

  myGraph.addLink("A", "B", true, 4);
  myGraph.addLink("A", "H", true, 8);
  myGraph.addLink("B", "C", true, 8);
  myGraph.addLink("B", "H", true, 11);
  myGraph.addLink("C", "D", true, 7);
  myGraph.addLink("C", "I", true, 2);
  myGraph.addLink("C", "F", true, 4);
  myGraph.addLink("D", "E", true, 9);
  myGraph.addLink("D", "F", true, 14);
  myGraph.addLink("E", "F", true, 10);
  myGraph.addLink("F", "G", true, 2);
  myGraph.addLink("G", "H", true, 1);
  myGraph.addLink("G", "I", true, 6);
  myGraph.addLink("H", "I", true, 7);

  let shortestRoute = dijstraks(myGraph, "A", "E");

  console.log("Shortest Routes");
  for (let i of shortestRoute) {
    console.log(i);
  }
});
