const Queue = require("../../dataStructures/queue/Queue");

function breadthFirstSearch(graph, startVertex) {
  let pendingQueue = new Queue();
  let items = [];

  // Visit the starting vertex
  pendingQueue.enqueue(startVertex);
  items.push(startVertex);

  let vertex = startVertex;
  do {
    // Get the related edges which are also in the invisited set
    let related = graph
      .getRelated(vertex)
      .map(({ node }) => node)
      .filter((i) => !items.includes(i));

    // If we have related edges, add them all to the items
    related.forEach((r) => {
      items.push(r);
      pendingQueue.enqueue(r);
    });

    if (related.length === 0) {
      vertex = pendingQueue.dequeue();
    }
  } while (!pendingQueue.isEmpty());

  return items;
}

module.exports = {
  breadthFirstSearch,
};
