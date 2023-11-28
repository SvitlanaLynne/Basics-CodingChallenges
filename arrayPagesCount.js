// Return the minimum count to reach a number: eather from the beginning or from the end of an array.

const n = 5;
const p = 3;

function CountPages(n, p) {
  let arr = [];
  let length = n;
  let elem = 0;
  let sliceSteps = Math.floor(n / 2);
  let grouppedArr = [];

  while (length >= 0) {
    arr.push(elem);
    elem++;
    length--;
  }

  let start = 0;
  let end = 2;
  while (sliceSteps >= 0) {
    let subArr = arr.slice(start, end);
    grouppedArr.push(subArr);
    sliceSteps--;
    start += 2;
    end += 2;
  }

  const fromStartSteps = grouppedArr.findIndex((elem) => elem.includes(p));
  const fromEndSteps = grouppedArr.length - 1 - fromStartSteps;

  if (fromStartSteps <= fromEndSteps) {
    return fromStartSteps;
  } else {
    return fromEndSteps;
  }
}

console.log(CountPages(n, p));

// OPTION TWO (using Array.from sequence generator)

function CountPages2(n, p) {
  // Array.from({length: n}, (value, index) => index)

  const grouppedArr = Array.from({ length: Math.ceil(n / 2) }, (_, i) =>
    Array.from({ length: 2 }, (_, j) => i * 2 + j)
  );

  const fromStartSteps = grouppedArr.findIndex((elem) => elem.includes(p));
  const fromEndSteps = grouppedArr.length - 1 - fromStartSteps;

  return Math.min(fromStartSteps, fromEndSteps);
}
console.log(CountPages2(n, p));
