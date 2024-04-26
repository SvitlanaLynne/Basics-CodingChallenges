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
// const s = [
//   [8, 3, 4],
//   [1, 5, 9],
//   [6, 7, 2],
// ];

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

  const calcSums = (matrix) => {
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
    let SumCount = {};
    let Sums = {};

    for (let key in arrays) {
      // calc the sum of a line
      if (arrays.hasOwnProperty(key)) {
        const arrayName = key;
        const array = arrays[key];
        let sum = 0;
        sum = array.reduce((total, current) => total + current);
        // store its frequency
        if (SumCount[sum]) {
          SumCount[sum]++;
        } else {
          SumCount[sum] = 1;
        }
        // sums coordinates
        Sums[key] = sum;
      }
    }

    return { SumCount, Sums };
  };

  // ----- EARLY - initial matrix is megical: return 0 as a cost
  const { SumCount, Sums } = calcSums(s);
  if (Object.keys(SumCount).length === 1) {
    return 0;
  } else {
    // ----- ANALYSE DATA
    console.log("Sums Count:", SumCount);
    // max  frequent among sums
    let maxCount = 0;
    for (let elem in SumCount) {
      if (SumCount[elem] > maxCount) {
        maxCount = +SumCount[elem];
      }
    }

    const getKeyByValue = (obj, value) => {
      return +Object.keys(obj).find((elem) => obj[elem] === value);
    };
    const aimSum = getKeyByValue(SumCount, maxCount);
    console.log("Aiming sum is", aimSum);

    // ----- EVALUATE INITIAL STATE
    // idfentify those, which are not max
    console.log("Sums", Sums);
    const linesOff = Object.keys(Sums).filter(
      (elem) => Sums[elem] !== parseInt(aimSum)
    );
    console.log("Lines Off", linesOff);

    // calc aiming sum
    const aimingSum = maxFrequent * numberOfSumsOff;
    // calc current sum
    const actualSum = linesOff.reduce((acc, current) => acc + current);

    console.log("Matrix is Off by", Math.abs(aimingSum - actualSum));

    // ----- ADJUSTING WITH THE SIMULATED ANNEALING

    // Find lines Off

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
}

// console.log(toMagicSquareCost(s));

console.log(toMagicSquareCost(s));
