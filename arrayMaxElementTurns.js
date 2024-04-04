// Return a string "ANDY"  or "BOB" depending who wins the game
// Bob playes first
// take of the max element and all elements to its right
// wins who made the last move

// const arr = [2, 3, 5, 4, 1];
// const arr = [2, 3, 5, 6, 4, 1];
// const arr = [2, 3, 3, 3, 5, 4, 1];
// const arr = [1, 3, 5, 7, 9];
const arr = [5, 2, 6, 3, 4];
// const arr = [3, 1];
// const arr = [5];

function Whoseturn(arr) {
  // more than 1 element?
  if (arr.length === 1) {
    return "BOB";
  }

  let currentPlayer = "BOB";

  function switchPlayer() {
    currentPlayer = currentPlayer === "BOB" ? "ANDY" : "BOB";
  }

  while (arr.length > 1) {
    console.log("\ncurrent player", currentPlayer);
    const currentMax = Math.max(...arr);
    console.log("Max was", currentMax);

    const indexOfMax = arr.indexOf(currentMax);
    arr = arr = arr.slice(0, indexOfMax);
    console.log("Sliced Arr", arr);

    if (arr.length === 0) {
      return currentPlayer;
    }
    switchPlayer();
    console.log("switched the player to", currentPlayer);
  }
  return currentPlayer;
}

console.log(Whoseturn(arr));

//OPTIMIZED OPTION
function Whoseturn(arr) {
  // If there's only one element in the array, return "BOB"
  if (arr.length === 1) {
    return "BOB";
  }

  // Define initial player
  let currentPlayer = "BOB";

  // Main loop
  while (arr.length > 1) {
    // Find the maximum element and its index
    let currentMax = -Infinity;
    let maxIndex = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > currentMax) {
        currentMax = arr[i];
        maxIndex = i;
      }
    }

    // Slice the array up to the maximum element
    arr = arr.slice(0, maxIndex);

    // If the array is empty, return the current player
    if (arr.length === 0) {
      return currentPlayer;
    }

    // Switch player
    currentPlayer = currentPlayer === "BOB" ? "ANDY" : "BOB";
  }

  // Return the current player if there's only one element left in the array
  return currentPlayer;
}
