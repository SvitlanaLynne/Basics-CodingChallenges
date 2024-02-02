// Output the array of the order level traversal of a binary tree.
//Output: [[3],[9,20],[15,7]]
// const root = [1];
// const root = [];
// const root = null;

// Constructor of a binary tree node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Example of TreeNode usage:
const root = new TreeNode(3);
const node1 = new TreeNode(9);
const node2 = new TreeNode(20);
const node3 = new TreeNode(15);
const node4 = new TreeNode(7);

root.left = node1;
root.right = node2;
node2.left = node3;
node2.right = node4;

function traverseTree(root) {
  if (!root) {
    return [];
  } else {
    const result = [];
    const queue = [root];
    console.log("Queue", queue);

    while (queue.length > 0) {
      const currentLevel = [];
      const levelSize = queue.length;
      console.log("queue size, queue length", levelSize);

      for (let i = 0; i < levelSize; i++) {
        const currentNode = queue.shift();

        if (currentNode) {
          currentLevel.push(currentNode.val);
          queue.push(currentNode.left, currentNode.right);
          console.log("queue when pushed left and right", queue);
        }
      }

      if (currentLevel.length > 0) {
        result.push(currentLevel);
      }
    }

    return result;
  }
}

console.log(traverseTree(root));

// Brute-force option for the input in the form of an array, not an instences of a constructor
// const root = [3, 9, 20, null, null, 15, 7];

// function traverseTree(root) {
//     const chunksArr = (arr) => {
//       let step = 2;
//       let result = [];
//       for (let i = 0; i < arr.length; i += step) {
//         let chunk = arr.slice(i, i + step);
//         result.push(chunk);
//       }
//       return result;
//     };

//     const recursiveTraversal = (node) => {
//       if (!node) {
//         return [];
//       }

//       const chunks = chunksArr(node);
//       const filteredChunks = chunks.map((chunk) => chunk.filter((x) => x !== null));

//       const left = recursiveTraversal(node[1]);
//       const right = recursiveTraversal(node[2]);

//       return [[node[0]], ...filteredChunks.filter((x) => x.length !== 0), ...left, ...right];
//     };

//     return recursiveTraversal(root);
//   }

//   // Example usage
//   const root = [3, [9, 20, null, 15, 7]];
//   console.log(traverseTree(root));
