// Note: controversial results.
// dustribute incoming numbers(strings) to 2 arrays.
// if 1 - append the number to the 1st or the 2nd array. formula to decide which array (x XOR current Variable % n), where x and n are provided.
// if 2 - Choose an array (by formula again), at index x, assign what found to Variable, console.log it.

const n = 2;
const queries = ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"];

function distributeTasks(n, queries) {
  const result = [];
  const arr0 = [];
  const arr1 = [];
  let lastAnswer = 0;

  // parsing
  const sequence = queries.map((str) => str.slice(0, 1));
  const xArr = queries.map((str) => str.slice(2, 3));
  const yArr = queries.map((str) => str.slice(-1));

  // chose array
  const chooseArr = (n, xArr, lastAnswer, index) => {
    if ((xArr[index] ^ lastAnswer) % n === 0) {
      return 0;
    } else {
      return 1;
    }
  };

  // choose type
  const type1 = (n, xArr, yArr, lastAnswer, index) => {
    const arrOption = chooseArr(n, xArr, lastAnswer, index);
    return arrOption === 0 ? arr0.push(yArr[index]) : arr1.push(yArr[index]);
  };

  const type2 = (n, xArr, yArr, index) => {
    const arrOption = chooseArr(n, xArr, index); // chosen array 0 or 1

    if (arrOption === 0) {
      lastAnswer = arr0[yArr[index] % arr0.length];

      result.push(parseInt(lastAnswer));
    } else {
      lastAnswer = arr1[yArr[index] % arr1.length];
      result.push(parseInt(lastAnswer));
    }
  };

  //deciding the task
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "1") {
      type1(n, xArr, yArr, lastAnswer, i);
    } else {
      type2(n, xArr, yArr, i);
    }
  }
  return result
}
console.log(distributeTasks(n, queries));
