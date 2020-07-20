const PriorityQueue = require("../../dataStructures/queue/PriorityQueue");

function dijstraks(graph, fromNode, toNode) {
  let shortestPathTreeSet = new Set();

  let currentDistances = new PriorityQueue((i) => i.distanceFromSource);
  currentDistances.enqueue({
    node: fromNode,
    viaNode: undefined,
    distanceFromSource: 0,
  });
  graph
    .getAllVertices()
    .filter((node) => node !== fromNode)
    .map((node) => ({ node, viaNode: undefined, distanceFromSource: Infinity }))
    .forEach((n) => currentDistances.enqueue(n));

  // While there are items in the queue to check...
  while (!currentDistances.isEmpty()) {
    let nextItem = currentDistances.dequeue();
    shortestPathTreeSet.add(nextItem);

    console.log("Checking Item", nextItem);

    graph.getRelated(nextItem.node).forEach(({ node, weight }) => {
      let current = currentDistances.removeMatch((d) => d.node === node);
      if (!!current) {
        let newPotentialWeight = nextItem.distanceFromSource + weight;
        if (newPotentialWeight < current.distanceFromSource) {
          currentDistances.enqueue({
            node: current.node,
            distanceFromSource: newPotentialWeight,
            viaNode: nextItem.node,
          });
        } else {
          // Just put the current one back
          currentDistances.enqueue(current);
        }
      }
    });
  }

  return shortestPathTreeSet;
}

module.exports = dijstraks;
