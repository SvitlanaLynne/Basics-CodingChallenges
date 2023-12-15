// Return the array of k mins, which wre calculated as the difference of max and min of k elements.

// const arr = [1, 4, 7, 2];
const arr = [10, 4, 1, 2, 3, 4, 10, 20, 30, 40, 100, 200];
k = 4;
// k = 2;

function minDiffArr(k, arr) {
  return arr
    .sort((a, b) => a - b)
    .slice(0, arr.length - k + 1)
    .reduce(
      (gap, value, index) => Math.min(arr[index + k - 1] - value, gap),
      Infinity
    );
}
console.log(minDiffArr(k, arr));

