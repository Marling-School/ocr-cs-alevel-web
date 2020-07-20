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
 * Default values for optional arguments.
 */
let defaultOptionalArgs = {
  toNode: undefined, // {string} If we want to 'stop early' and only find the route to one node...specify it
  getHeuristicCost: (node) => 0, // get the heuristic calculated cost for the given node
};

/**
 * Executes Dijkstras routing algorithm, returning the shortest path tree for the given source node.
 *
 * This algorithm can end early if the toNode is specified, here is a discussion of the validity of this...
 * https://stackoverflow.com/questions/23906530/dijkstras-end-condition
 *
 * @param {Graph} graph The graph that contains all the nodes and links
 * @param {string} fromNode The node we are travelling from
 * @param {function} compare A function that accepts two nodes and compares them
 * @param {string | undefined} optionalArguments // Optional arguments, see above for default values
 * @returns Shortest Path Tree { [node] : {cost: number, viaNode: string} }
 */
function dijstraks(
  graph,
  fromNode,
  compare,
  { toNode, getHeuristicCost } = defaultOptionalArgs
) {
  let shortestPathTree = {};

  // Build a priority queue, where the nodes are arranged in order of
  // distance from the source (smallest to largest)
  let currentDistances = new PriorityQueue((a, b) => b.cost - a.cost);

  // Add the from node, it doesn't go via anything, and it's distance is zero
  currentDistances.enqueue({
    node: fromNode,
    viaNode: undefined,
    cost: 0,
  });

  // Add all the other nodes, with a distance of Infinity
  graph
    .getAllVertices()
    .filter((node) => compare(node, fromNode) !== 0)
    .map((node) => ({ node, viaNode: undefined, cost: Infinity }))
    .forEach((n) => currentDistances.enqueue(n));

  // While there are items in the queue to check...
  while (!currentDistances.isEmpty()) {
    // Take the node that is the shortest distance from our source node
    let currentItem = currentDistances.dequeue();

    // Put this item into our set (using node as a key)
    shortestPathTree[currentItem.node] = {
      cost: currentItem.cost,
      viaNode: currentItem.viaNode,
    };

    if (!!toNode && compare(currentItem.node, toNode) === 0) {
      break;
    }

    // Get all the links from our current item
    graph
      .getRelated(currentItem.node)
      .filter(({ node }) => shortestPathTree[node] === undefined) // only those that aren't in our tree already
      .forEach(({ node, weight }) => {
        // Remove the matching item from our current known distances
        // It will either be replaced as is, or replaced with updated details
        let otherItem = currentDistances.removeMatch(
          (d) => compare(d.node, node) === 0
        );

        if (weight === Infinity) {
          // This is the first time we have 'found' this node, so this is the best known route
          currentDistances.enqueue({
            node,
            cost: weight,
            viaNode: currentItem.node,
          });
        } else {
          // What is the distance to this other node, from our current node?
          let newPotentialDistance =
            currentItem.cost + weight + getHeuristicCost(currentItem.node);

          // Have we found a shorter route?
          if (newPotentialDistance < otherItem.cost) {
            // Replace the node with our new distance and via details
            currentDistances.enqueue({
              node: node,
              cost: newPotentialDistance,
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
