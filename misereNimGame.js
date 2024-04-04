// 2 players take turns, optimally.
// 1 stone in the pile needs to be left to win.
// return a string "First" or "Second"

// const s = [1, 1, 1];
const s = [1, 1];
// const s = [1, 2, 2];
// const s = [2, 1, 3];

function game(s) {
  // Calculate the bitwise XOR of all pile sizes
  let count = 0;
  let xorSum = 0;
  for (let i = 0; i < s.length; i++) {
    //early, if only 1s
    if (s[i] === 1) {
      count++;
    }
    if (count === s.length) {
      if (count % 2 === 0) {
        return "First";
      } else {
        return "Second";
      }
    }
    xorSum ^= s[i];
  }

  console.log("count is ", count);

  // If the xor sum is zero, the second player wins
  if (xorSum === 0) {
    return "Second";
  } else {
    // If the xor sum is non-zero, the first player wins
    return "First";
  }
}

// game(s);
console.log(game(s));
