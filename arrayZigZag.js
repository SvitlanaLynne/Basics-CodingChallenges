// find the sequence, so that first "k" elements would be simply in increasing and the last "k" elements would be just in descreasing order.
// k = (n + 1) / 2;

// const arr = [2, 3, 5, 1, 4];
const arr = [2, 3, 5, 1, 4, 6, 7];

function findZigZagSequence(arr, length) {
  arr.sort((a, b) => a - b);
  const k = Math.floor((length + 1) / 2);

  let tail = length - k;
  let head = 0;

  while (tail < length) {
    let temp = arr[head];
    arr[head] = arr[tail];
    arr[tail] = temp;

    tail++;
    head++;
  }

  let subArr = arr.slice(-k).sort((a, b) => b - a);

  const result = arr.slice(0, arr.length - k).concat(subArr);

  console.log(result);
}

findZigZagSequence(arr, arr.length);
