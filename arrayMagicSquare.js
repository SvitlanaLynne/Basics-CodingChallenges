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

  const d1 = [s[0][0], s[1][1], s[2][2]];
  const d2 = [s[0][2], s[1][1], s[2][0]];

  // ----- EARLY - initial matrix is megical: return 0 as a cost
  let SumsArr = [];
  if (isMagical(s)) {
    return 0;
  } else {
    // ----- ANALYSE DATA
    // number of lines Off
    let counts = {};
    for (let elem of SumsArr) {
      if (counts[elem]) {
        counts[elem]++;
      } else {
        counts[elem] = 1;
      }
    }
    console.log("counts of numbers Off", counts);

    // max  frequent among sums
    let maxFrequent;
    let max = 0;
    for (let elem in counts) {
      if (counts[elem] > max) {
        maxFrequent = parseInt(elem);
        max = counts[elem];
      }
    }
    console.log("max Frequent sum is", maxFrequent);

    // ----- EVALUATE INITIAL STATE
    // find the difference between aimed and current sums
    // filter those, which are not max
    const filtered = SumsArr.filter((x) => x !== parseInt(maxFrequent));
    const numberOfSumsOff = filtered.length;

    // calc aiming sum
    const aimingSum = maxFrequent * numberOfSumsOff;
    // calc current sum
    const actualSum = filtered.reduce((acc, current) => acc + current);

    console.log("Matrix is Off by", Math.abs(aimingSum - actualSum));

    // ----- ADJUSTING WITH THE SIMULATED ANNEALING

    // Find lines Off
    const linesOff = [];
    for (let key in SumsObj) {
      if (SumsObj[key] !== maxFrequent) {
        linesOff.push(key);
      }
    }
    // Find potential elements to adjust
    let toAdjust = {};
    if (linesOff.length > 1) {
      for (let i = 0; i < linesOff.length - 1; i++) {
        let arr1 = eval(linesOff[i]);
        console.log("arr1", arr1);
        let arr2 = eval(linesOff[i + 1]);
        console.log("arr2", arr2);
        let set = new Set(arr1);
        console.log("set of the current array is", set);
        for (let j = 0; j < arr2.length; j++) {
          if (set.has(arr2[j])) {
            console.log("COMMON ELEMENT is", arr2[j]);
            toAdjust[linesOff[i]] = arr2[j];
          } else {
            ("no common found, but should!");
          }
        }
      }
    } else {
      console.log("Just ONE line is off. Look through it");
      toAdjust[linesOff[i]] = eval(linesOff[i]);
    }
    console.log("toAdjust", toAdjust);

    // Set the Base Case when the alternation is accepted
    // Set the limit of trials
    let i = 4;
    while (isMagical(matrix) === false && i > 0) {
      i--;
    }
    // Set the range of trials
    // Adjust the elements
    // Reevaluate if the adjustment is sufficient
    // Gather potential answers (difference between the initial and current,adjusted element)
    // pick and output the minimum
  }

  // function isMagical(matrix) {
  //   // ----- PREPARE DATA  - SUMS
  //   // Reduce - sum of all elements - got an Array and Object of sums
  //   const arrays = {
  //     a1: a1,
  //     a2: a2,
  //     a3: a3,
  //     b1: b1,
  //     b2: b2,
  //     b3: b3,
  //     d1: d1,
  //     d2: d2,
  //   };
  //   const SumsObj = {};

  //   for (let key in arrays) {
  //     if (arrays.hasOwnProperty(key)) {
  //       const arrayName = key;
  //       const array = arrays[key];
  //       const sum = array.reduce((total, current) => total + current);
  //       SumsObj[arrayName] = sum;
  //     }
  //   }

  //   console.log("Sums:", SumsObj);

  //   const SumsArr = [];
  //   for (let elem in SumsObj) {
  //     SumsArr.push(SumsObj[elem]);
  //   }

  //   const set = [...new Set(SumsArr)];
  //   if (set.length === 1) {
  //     console.log("The square is MAGICAL");
  //     return true;
  //   }
  // }
}

// console.log(toMagicSquareCost(s));

function isNMagical(matrix) {
  const a1 = [s[0][0], s[0][1], s[0][2]];
  const a2 = [s[1][0], s[1][1], s[1][2]];
  const a3 = [s[2][0], s[2][1], s[2][2]];

  const b1 = [s[0][0], s[1][0], s[2][0]];
  const b2 = [s[0][1], s[1][1], s[2][1]];
  const b3 = [s[0][2], s[1][2], s[2][2]];

  const d1 = [s[0][0], s[1][1], s[2][2]];
  const d2 = [s[0][2], s[1][1], s[2][0]];
  const arrays = {
    a1: a1,
    a2: a2,
    a3: a3,
    b1: b1,
    b2: b2,
    b3: b3,
    d1: d1,
    d2: d2,
  };
  let sumsFreq = {};
  for (let key in arrays) {
    // calc the sum of a line
    if (arrays.hasOwnProperty(key)) {
      const arrayName = key;
      const array = arrays[key];
      let sum = 0;
      sum = array.reduce((total, current) => total + current);
      // store its frequency
      if (sumsFreq[sum]) {
        sumsFreq[sum]++;
      } else {
        sumsFreq[sum] = 1;
      }
    }
  }

  console.log("Sums frequency is ", sumsFreq);
  return Object.keys(sumsFreq) !== 1 ? false : true;
}

console.log(isNMagical(s));
