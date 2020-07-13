const { Graph } = require("./graph");

test("Creating a Weighted Graph", () => {
  let graph = new Graph();
  graph.addLink("A", "B", true, 1.0);
  graph.addLink("A", "C");
  graph.addLink("A", "D", false, 4.0);
  graph.addLink("D", "A", false, 2.0);

  //   console.log("Testing on the following graph");
  //   console.log(graph.toString());

  let ad = graph.getLinkWeight("A", "D");
  expect(ad).toBe(4.0);

  let da = graph.getLinkWeight("D", "A");
  expect(da).toBe(2.0);
});
