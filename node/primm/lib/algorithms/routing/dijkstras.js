const PriorityQueue = require("../../dataStructures/queue/PriorityQueue");

function dijstraks(graph, fromNode, toNode) {
  let shortestPathTree = {};

  // Build a priority queue, where the nodes are arranged in order of
  // distance from the source (smallest to largest)
  let currentDistances = new PriorityQueue(
    (a, b) => b.distanceFromSource - a.distanceFromSource
  );

  // Add the from node, it doesn't go via anything, and it's distance is zero
  currentDistances.enqueue({
    node: fromNode,
    viaNode: undefined,
    distanceFromSource: 0,
  });

  // Add all the other nodes, with a distance of Infinity
  graph
    .getAllVertices()
    .filter((node) => node !== fromNode)
    .map((node) => ({ node, viaNode: undefined, distanceFromSource: Infinity }))
    .forEach((n) => currentDistances.enqueue(n));

  // While there are items in the queue to check...
  while (!currentDistances.isEmpty()) {
    // Take the node that is the shortest distance from our source node
    let currentItem = currentDistances.dequeue();

    // Put this item into our set (using node as a key)
    shortestPathTree[currentItem.node] = {
      distanceFromSource: currentItem.distanceFromSource,
      viaNode: currentItem.viaNode,
    };

    // Get all the links from our current item
    let links = graph
      .getRelated(currentItem.node)
      .filter(({ node }) => shortestPathTree[node] === undefined)
      .map(({ node, weight }) => ({ node, distanceFromCurrent: weight }));

    // For each link
    links.forEach(({ node, distanceFromCurrent }) => {
      // Remove the matching item from our current known distances
      // It will either be replaced as is, or replaced with updated details
      let otherItem = currentDistances.removeMatch((d) => d.node === node);

      if (!!otherItem) {
        if (distanceFromCurrent === Infinity) {
          currentDistances.enqueue({
            node,
            distanceFromSource: distanceFromCurrent,
            viaNode: currentItem.node,
          });
        } else {
          let newPotentialDistance =
            currentItem.distanceFromSource + distanceFromCurrent;

          if (newPotentialDistance < otherItem.distanceFromSource) {
            currentDistances.enqueue({
              node: node,
              distanceFromSource: newPotentialDistance,
              viaNode: currentItem.node,
            });
          } else {
            // Just put the current one back
            currentDistances.enqueue(otherItem);
          }
        }
      }
    });
  }

  return shortestPathTree;
}

module.exports = dijstraks;
