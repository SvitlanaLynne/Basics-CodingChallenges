// Input : 2d array of integers
// Output: integer, a minimum cost to make the random square magical
// Magical if the sums of all rows, columns and diagonal are the same number.

// const s = [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 5],
// ];
const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function toMagicSquareCost(s) {
  // form rows, columns, diagonals for checking
  const a1 = [s[0][0], s[0][1], s[0][2]];
  const a2 = [s[1][0], s[1][1], s[1][2]];
  const a3 = [s[2][0], s[2][1], s[2][2]];

  const b1 = [s[0][0], s[1][0], s[2][0]];
  const b2 = [s[0][1], s[1][1], s[2][1]];
  const b3 = [s[0][2], s[1][2], s[2][2]];

  const d1 = [a1[0], a2[1], a3[2]];
  const d2 = [a1[2], a2[1], a3[0]];

  // Reduce - sum of all elements - got an Array of sums
  const arr = [a1, a2, a3, b1, b2, b3, d1, d2];
  const arrays = { a1, a2, a3, b1, b2, b3, d1, d2 }; // Assuming a1, a2, ... are variables containing arrays
  const reducedSums = {};

  for (let key in arrays) {
    if (arrays.hasOwnProperty(key)) {
      const arrayName = key; // Get the name of the array
      const array = arrays[key]; // Get the array itself
      const sum = array.reduce((total, current) => total + current); // Calculate the sum
      reducedSums[arrayName] = sum; // Assign the sum to the corresponding array name in the result object
    }
  }

  console.log(reducedSums);
  //   const ArrayOfSums = arr.map((x) =>
  //     x.reduce((total, current) => total + current)
  //   );

  // early - set of sums is empty: return 0
  const set = [...new Set(ArrayOfSums)];
  if (set.length === 1) {
    return 0;
  }
  console.log("Set", set);

  // max  frequent in Array
  let counts = {};
  for (let elem of ArrayOfSums) {
    if (counts[elem]) {
      counts[elem]++;
    } else {
      counts[elem] = 1;
    }
  }

  console.log("counts of numbers Off", counts);

  let maxFrequent;
  let max = 0;
  for (let elem in counts) {
    if (counts[elem] > max) {
      maxFrequent = elem;
      max = counts[elem];
    }
  }

  // filter those, which are not max
  const filtered = ArrayOfSums.filter((x) => x !== parseInt(maxFrequent));
  const numberOfSumsOff = filtered.length;

  // calc max * fileterd array length
  const aimingSum = maxFrequent * numberOfSumsOff;
  // calc filtered * filtered array length
  const actualSum = filtered.reduce((acc, current) => acc + current);
  // output the difference

  return Math.abs(aimingSum - actualSum);
}

console.log(toMagicSquareCost(s));
