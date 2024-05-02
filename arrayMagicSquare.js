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
  const calcSums = (matrix) => {
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
        // sums maping with lines
        Sums[key] = sum;
      }
    }

    return { SumCount, Sums };
  };
  const isMagical = () => {
    return SumCount.length === 1 ? true : false;
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
    // idfentify lines, which are not max
    console.log("Sums", Sums);
    const linesOff = Object.keys(Sums).filter(
      (elem) => Sums[elem] !== parseInt(aimSum)
    );
    console.log("Lines Off", linesOff);

    // find the number to adjust
    const linesOffArr = linesOff.map((x) => arrays[x]);
    console.log("Arrays to compare", linesOffArr);

    const numberToAdjust = (linesOffArr) => {
      let common = [];
      for (let i = 0; i < linesOffArr.length - 1; i++) {
        common.push(
          ...linesOffArr[i].filter((elem) => linesOffArr[i + 1].includes(elem))
        );
      }
      return common;
    };

    console.log("NUMBER(s) to adjust", numberToAdjust(linesOffArr));

    // ----- ADJUSTING WITH THE SIMULATED ANNEALING

    // Set the direction of trials (add or substract)

    // Set the Base Case when the alternation is accepted and the limit of trials
    let i = 8;

    while (isMagical(matrix) === false && i > 0) {
      // Adjust the elements

      i--;
    }

    // Reevaluate if the adjustment is sufficient
    // Gather potential answers (difference between the initial and current,adjusted element)
    // pick and output the minimum
  }
}

// console.log(toMagicSquareCost(s));

console.log(toMagicSquareCost(s));
