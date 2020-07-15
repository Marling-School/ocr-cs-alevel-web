const Stack = require("../../dataStructures/stack/Stack");

function depthFirstSearch(graph, startVertex) {
  let pendingStack = new Stack();
  let items = [];

  let vertex = startVertex;
  while (true) {
    if (!items.includes(vertex)) {
      items.push(vertex);
      pendingStack.push(vertex);
    }

    // get the relate edges which are also in the unvisited set
    let related = graph
      .getRelated(vertex)
      .map(({ node }) => node)
      .filter((i) => !items.includes(i));

    if (related.length > 0) {
      vertex = related[0];
    } else {
      vertex = pendingStack.pop();
    }

    if (pendingStack.isEmpty()) {
      break;
    }
  }

  return items;
}

module.exports = depthFirstSearch;
