const { breadthFirstSearch } = require("./GraphTraversal");
const { Graph } = require("../../dataStructures/graph/Graph");

function createTestGraph() {
  let myGraph = new Graph();

  myGraph.addLink("S", "A");
  myGraph.addLink("S", "B");
  myGraph.addLink("S", "C");
  myGraph.addLink("A", "D");
  myGraph.addLink("D", "G");
  myGraph.addLink("B", "E");
  myGraph.addLink("E", "G");
  myGraph.addLink("C", "F");
  myGraph.addLink("F", "G");

  return myGraph;
}

test("Graph - Breadth First Search", () => {
  let myGraph = createTestGraph();

  let items = breadthFirstSearch(myGraph, "S");

  let directlyLinked = ["A", "B", "C"];
  let transitivelyLinked = ["D", "E", "F", "G"];
  directlyLinked.forEach((i) =>
    transitivelyLinked.forEach((t) => {
      indexOfI = items.indexOf(i);
      indexOfT = items.indexOf(t);
      expect(indexOfI).not.toBe(-1);
      expect(indexOfT).not.toBe(-1);
      expect(indexOfI).toBeLessThan(indexOfT);
    })
  );
});
