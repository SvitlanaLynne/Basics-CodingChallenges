// use Counting sort
// replace with first half of an input arr with dashes

const arr = [
  "0 ab",
  "6 cd",
  "0 ef",
  "6 gh",
  "4 ij",
  "0 ab",
  "6 cd",
  "0 ef",
  "6 gh",
  "0 ij",
  "4 that",
  "3 be",
  "0 to",
  "1 be",
  "5 question",
  "1 or",
  "2 not",
  "4 is",
  "2 to",
  "4 the",
];
const sortedArray = countingSort(arr);

function countingSort(arr) {
  const dashesArr = arr.slice(0, arr.length / 2);

  const arrCopy = arr.slice();

  const numsArr = ditatchNums(arr);
  function ditatchNums(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(parseInt(arr[i].charAt(0)));
    }
    return result;
  }
  const max = Math.max(...numsArr);
  const countArr = Array(max + 1).fill(0);

  for (let elem of numsArr) {
    countArr[elem]++;
  }

  let j = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arrCopy[j] = i;
      j++;
      countArr[i]--;
    }
  }

  const set = [...new Set(arrCopy)];
  let sortedArr = [];
  for (let elem of set) {
    let filteredParts = arr.filter((x) => x.charAt(0) === elem.toString());
    sortedArr.push(...filteredParts);
  }
  const result = sortedArr.map((x) =>
    dashesArr.includes(x) ? "-" : x.split(" ").slice(1).toString()
  );
  return result;
}

console.log(sortedArray);


// Option 2 by dmitriyvgladkov, no count sort used
inputArray.filter((_, index) => index < inputArray.length / 2).forEach((element => element[1] = '-'));
    inputArray.sort((a, b) => a[0] - b[0]);
    console.log(inputArray.map(element => element[1]).join(" ").trimEnd());
