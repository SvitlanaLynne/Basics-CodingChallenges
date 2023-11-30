// put a given amount of an array elemnts to the end of it.

const d = 2;
const arr = [1, 2, 3, 4, 5];

function leftShift(d, arr) {
  const slicedPart = arr.slice(0, d);
  const slicedArr = arr.slice(d);
  slicedArr.push(...slicedPart);

  const result = slicedArr;

  return result;
}

console.log(leftShift(d, arr));

// version 2

function leftShift2(d, arr) {
  return arr.slice(d).concat(arr.slice(0, d));
}

console.log(leftShift2(d, arr));
