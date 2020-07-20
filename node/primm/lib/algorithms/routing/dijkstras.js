const PriorityQueue = require("../../dataStructures/queue/PriorityQueue");
const Stack = require("../../dataStructures/stack/Stack");

function getPath(shortestPathTree, toNode) {
  // Build the stack of nodes between fromNode -> toNode
  // We are working backwards, so by using a stack, reading the items back off will reverse the order
  let node = toNode;
  let path = new Stack();
  while (!!node) {
    path.push(node);
    node = shortestPathTree[node].viaNode;
  }

  return [...path.getItems()]; // iterates through the stack, reading back the items in reverse order
}

/**
 * Executes Dijkstras routing algorithm, returning the shortest path tree for the given source node.
 *
 * @param {Graph} graph
 * @param {string} fromNode
 * @param {string | undefined} toNode If we want to 'stop early' and only find the route to one node...specify it
 * @returns Shortest Path Tree { [node] : {distanceFromSource: number, viaNode: string} }
 */
function dijstraks(graph, fromNode, toNode = undefined) {
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

    if (!!toNode && currentItem.node === toNode) {
      break;
    }

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

      if (distanceFromCurrent === Infinity) {
        // This is the first time we have 'found' this node, so this is the best known route
        currentDistances.enqueue({
          node,
          distanceFromSource: distanceFromCurrent,
          viaNode: currentItem.node,
        });
      } else {
        // What is the distance to this other node, from our current node?
        let newPotentialDistance =
          currentItem.distanceFromSource + distanceFromCurrent;

        // Have we found a shorter route?
        if (newPotentialDistance < otherItem.distanceFromSource) {
          // Replace the node with our new distance and via details
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
    });
  }

  return shortestPathTree;
}

module.exports = {
  dijstraks,
  getPath,
};
