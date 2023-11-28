// Return the lengthof the longest subarray, where the diffrenece of any 2 elements would be >= 1;

// const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
const a = [4, 6, 5, 3, 3, 1];

function findSubarray(a) {
  a.sort((a, b) => a - b);
  console.log("sorted array", a);
  let prev = a[0];
  let length = 0;
  let maxLength = 0;

  for (let elem of a) {
    if (elem - prev <= 1) {
      length++;
      maxLength = Math.max(maxLength, length);
    } else {
      prev = elem;
      length = 1;
    }
  }

  return maxLength;
}

console.log(findSubarray(a));

