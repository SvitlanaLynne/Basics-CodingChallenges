// Output the pairs with the smallest absolute difference

// const arr = [5, 2, 3, 4, 1];
// const arr = [
//   -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
//   266854,
// ];
const arr = [
  -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
  266854, -520, -470,
];
// const arr = [-20, 30];

function findMinDiffrence(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  //   console.log("sorted:", sortedArr);
  let differencesArr = [];
  for (let i = 0; i < sortedArr.length - 1; i++) {
    differencesArr.push(Math.abs(sortedArr[i] - sortedArr[i + 1]));
  }
  const sortedDiffs = differencesArr.sort((a, b) => a - b);
  const minDiff = sortedDiffs[0];
  //   console.log("minDiff", minDiff);

  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === minDiff) {
      result.push(arr[i], arr[i + 1]);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(findMinDiffrence(arr));
