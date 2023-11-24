// pick 3 elements, which 1) form a trianglel 2) produce the maximum sum. Return acsending array.
// if several sums, choose the array with the largest eelement
// if if sveeral largest, choose the bigger minimum
// if several minimums, choose any.
// if the triangke cannot be formed, print -1.

// valid triangle can be formed if the sum of 2 sides is bigger than the 3rd one.

const sticks = [1, 2, 3, 4, 5, 10];

function maxSum(sticks) {
  const sortedArr = sticks.sort((a, b) => b - a);

  const sides = sortedArr.slice(0, 3);

  for (elem of sides) {
    // const remaining = sides.filter((x) => x !== elem);
    // console.log(remaining);

    console.log(elem);
  }

  //   return sides;
}

maxSum(sticks);
// console.log(maxSum(sticks));
