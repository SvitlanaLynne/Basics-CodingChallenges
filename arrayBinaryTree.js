// Output the array of the order level traversal of a binary tree.
//Output: [[3],[9,20],[15,7]]

const root = [3, 9, 20, null, null, 15, 7];
// const root = [1];
// const root = [];
// const root = null;

function traverseTree(root) {
  if (!root || root.length === 0) {
    return [];
  } else {
    const chunksArr = (arr) => {
      // Check if arr is not null and has a length greater than 1
      let step = 2;
      let result = [];
      for (let i = 1; i < arr.length - 1; i += step) {
        let chunk = arr.slice(i, i + step);
        result.push(chunk);
      }
      return result;
    };

    //   console.log("Chunks array", chunksArr(root));

    const chunks = chunksArr(root);
    const filteredChunks = chunks.map(
      (chunk) => (chunk = chunk.filter((x) => x !== null))
    );

    //   console.log("filtered", filteredChunks);

    return [[root[0]], ...filteredChunks.filter((x) => x.length !== 0)];
  }
}

console.log(traverseTree(root));

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
