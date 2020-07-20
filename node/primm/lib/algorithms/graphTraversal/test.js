const breadthFirstSearch = require("./breadthFirstSearch");
const depthFirstSearch = require("./depthFirstSearch");
const Graph = require("../../dataStructures/graph/Graph");

function createTestGraph() {
  return new Graph()
    .addLink("S", "A")
    .addLink("S", "B")
    .addLink("S", "C")
    .addLink("A", "D")
    .addLink("D", "G")
    .addLink("B", "E")
    .addLink("E", "G")
    .addLink("C", "F")
    .addLink("F", "G");
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

test("Graph - Depth First Search", () => {
  let myGraph = createTestGraph();

  let items = depthFirstSearch(myGraph, "S");

  let directRelatives = [
    { direct: "C", transitive: "F" },
    { direct: "A", transitive: "D" },
    { direct: "B", transitive: "E" },
  ].map(({ direct, transitive }) => ({
    direct,
    transitive,
    indexOfDirect: items.indexOf(direct),
    indexOfTransitive: items.indexOf(transitive),
  }));
  directRelatives.sort((a, b) => a.indexOfDirect - b.indexOfDirect);

  // Just check we have all the right bits
  expect(directRelatives.length).toBe(3);

  // This is the common transitive link from all 3 start points
  let indexOfG = items.indexOf("G");

  // For all but the first one
  directRelatives
    .filter((_, i) => i !== 0)
    .forEach(({ indexOfDirect, indexOfTransitive }) => {
      expect(indexOfDirect).toBeGreaterThan(directRelatives[0].indexOfDirect);
      expect(indexOfTransitive).toBeGreaterThan(
        directRelatives[0].indexOfDirect
      );

      // The first direct link will go through G and then back up to this direct link
      expect(indexOfDirect).toBeGreaterThan(indexOfG);
      expect(indexOfTransitive).toBeGreaterThan(indexOfG);

      // The transitive dep will have been hoovered up already
      expect(indexOfTransitive).toBeLessThan(indexOfDirect);
    });
});
