// Count pair of numbers satisfing the following condition.
// i < j, arr[i] + arr[j] are devided by k.

const arr = [1, 3, 2, 6, 1, 2];
const n = 6; // arr.length
const k = 3;

function CountPairs(n, k, ar) {
  let Count = 0;

  function generatePairs(arr) {
    let resultArr = [];

    for (let i = 0; i <= arr.length - 1; i++) {
      for (let j = i + 1; j <= arr.length - 1; j++) {
        resultArr.push([arr[i], arr[j]]);
      }
    }

    console.log(resultArr);
    return resultArr;
  }

  const pairsArr = generatePairs(ar);

  for (let elem of pairsArr) {
    let sum = elem.reduce((total, current) => total + current);
    sum % k === 0 ? Count++ : "";
  }
  console.log(Count, "count");
  return Count;
}

CountPairs(n, k, arr);
