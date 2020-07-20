const Graph = require("../../dataStructures/graph/Graph");
const { dijstraks, getPath } = require("./dijkstras");
const { stringComparator } = require("../sort/common");

// https://youtu.be/ySN5Wnu88nE?t=239
test("Routing Algorithms - A*", () => {
  // The addition that A* has is the use of a heuristic to
  // provide the algorithm with a sense of direction.
  let euclideanDistances = {
    S: 10,
    A: 9,
    B: 7,
    C: 8,
    D: 8,
    E: 0,
    F: 6,
    G: 3,
    H: 6,
    I: 4,
    J: 4,
    K: 3,
    L: 6,
  };
  let getHeuristictCost = (d) => euclideanDistances[d];

  let myGraph = new Graph()
    .addLink("S", "A", true, 7)
    .addLink("S", "B", true, 2)
    .addLink("S", "C", true, 3)
    .addLink("A", "D", true, 4)
    .addLink("A", "B", true, 3)
    .addLink("B", "D", true, 4)
    .addLink("B", "H", true, 1)
    .addLink("C", "L", true, 2)
    .addLink("D", "F", true, 5)
    .addLink("E", "K", true, 5)
    .addLink("E", "G", true, 2)
    .addLink("F", "H", true, 3)
    .addLink("G", "H", true, 2)
    .addLink("I", "L", true, 4)
    .addLink("I", "K", true, 4)
    .addLink("J", "L", true, 4)
    .addLink("J", "K", true, 4);
  let shortestPathTreeStoE = dijstraks(myGraph, "S", stringComparator, {
    toNode: "E",
    getHeuristictCost,
  });

  let pathStoE = getPath(shortestPathTreeStoE, "E");
  expect(pathStoE).toEqual(["E", "G", "H", "B", "S"]);
});

// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
test("Routing Algorithms - Dijkstra", () => {
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

  let viaNode = "0";
  let shortestPathTreeAll = dijstraks(myGraph, viaNode, stringComparator);
  expect(shortestPathTreeAll).toEqual({
    "0": { cost: 0, viaNode: undefined },
    "1": { cost: 4, viaNode: "0" },
    "2": { cost: 12, viaNode: "1" },
    "3": { cost: 19, viaNode: "2" },
    "4": { cost: 21, viaNode: "5" },
    "5": { cost: 11, viaNode: "6" },
    "6": { cost: 9, viaNode: "7" },
    "7": { cost: 8, viaNode: "0" },
    "8": { cost: 14, viaNode: "2" },
  });

  let pathTo4 = getPath(shortestPathTreeAll, "4");
  expect(pathTo4).toEqual(["4", "5", "6", "7", "0"]);

  let pathTo3 = getPath(shortestPathTreeAll, "3");
  expect(pathTo3).toEqual(["3", "2", "1", "0"]);

  let pathTo8 = getPath(shortestPathTreeAll, "8");
  expect(pathTo8).toEqual(["8", "2", "1", "0"]);

  // Do the same thing again, but only find the route to one node
  // It should come up with the same answer, but will make no attempt to route 'every node'
  let shortestPathTree4only = dijstraks(
    myGraph,
    viaNode,
    stringComparator,
    (a, b) => a.localCompare(b),
    { toNode: "4" } // this time specifying the toNode
  );
  let pathTo4only = getPath(shortestPathTree4only, "4");
  expect(pathTo4only).toEqual(["4", "5", "6", "7", "0"]);
});
