const traverseNode = ({ node, parent, visitor }) => {
  const methods = visitor[node.type];

  if (methods && methods.enter) {
    methods.enter({ node, parent });
  }

  if (node.arguments) {
    traverseArray({ node: node.arguments, parent: node, visitor });
  }

  if (methods && methods.exit) {
    methods.exit({ node, parent });
  }
};

const traverseArray = ({ array, parent, visitor }) => {
  array.forEach((node) => {
    traverseNode({
      node,
      parent,
      visitor,
    });
  });
};

const traverse = (node, visitor) => {};

module.exports = { traverse };

// const visitor = {
//   VariableDeclaration({ node, paren }) {
//     enter({ node, parent }) {},
//     exit() {}
//   },
// };
