// pick 3 elements, which 1) form a trianglel 2) produce the maximum sum. Return acsending array.
// if several sums, choose the array with the largest eelement
// if if several largest, choose the bigger minimum
// if several minimums, choose any.
// if the triangle cannot be formed, print -1.

// valid triangle can be formed if the sum of 2 sides is bigger than the 3rd one.

const sticks = [1, 2, 3, 4, 5, 10];

function maxSum(sticks) {
  const validArr = [];
  const sumsMap = {};

  validOptions(sticks);

  if (validArr.length > 0) {
    for (let elem of validArr) {
      const sum = elem.reduce((total, current) => total + current);
      sumsMap[elem] = sum;
    }
  } else {
    return [-1];
  }

  let max = 0;

  let maxOptions = [];
  for (let key in sumsMap) {
    if (sumsMap[key] > max) {
      max = sumsMap[key];
    }
    if (sumsMap[key] === max) {
      maxOptions.push(key.split(","));
    }
  }

  if (maxOptions.length > 1) {
    let max = 0;
    let maxLengthOptions = [];
    let minOfMaxOptions = [];
    for (let elem of maxOptions) {
      elem.sort((a, b) => b - a);
      if (elem[0] > max) {
        max = elem[0];
        maxLengthOptions.push(elem[0]);
        minOfMaxOptions.push(elem[maxOptions.length - 1]);
      }
    }
    if (maxLengthOptions.length > 1) {
      const biggerMin = minOfMaxOptions.sort((a, b) => a - b)[0];
      const minOfMax = maxLengthOptions.filter(
        (x) => x[maxLengthOptions.length - 1] === biggerMin
      );
      return minOfMax;
    } else {
      return maxLengthOptions[0];
    }
  } else {
    const result = maxOptions[0].sort((a, b) => a - b);
    return result;
  }

  // ---- utility functions ----

  function validOptions(sticks) {
    const sortedArr = sticks.sort((a, b) => b - a);
    const remainingArr = sortedArr.slice();
    let length = sortedArr.length - 3;
    while (length >= 0) {
      let threeSides = remainingArr.slice(0, 3);
      if (validTriangle(threeSides)) {
        validArr.push(threeSides);
      }
      remainingArr.shift();
      length--;
    }

    function validTriangle(sides) {
      return (
        sides[0] + sides[1] > sides[2] &&
        sides[1] + sides[2] > sides[0] &&
        sides[2] + sides[0] > sides[1]
      );
    }
    return validArr;
  }
}

console.log(maxSum(sticks));
