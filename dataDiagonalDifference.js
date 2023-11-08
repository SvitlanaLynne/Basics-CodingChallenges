// return diagonal difference of 2 diagonal of a matrix

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
// const arr = [
//   [11, 2, 4, 0],
//   [4, 5, 6, 0],
//   [10, 8, -12, 0],
//   [6, 5, -1, 3],
// ];

function diagonalDifference(arr) {
  function sumLeftDiag(arr) {
    let diagonalLeft = [];
    let i = 0;
    let j = 0;
    while (i < arr.length && j < arr.length) {
      diagonalLeft.push(arr[i][j]);
      i++;
      j++;
    }
    const result = diagonalLeft.reduce((total, elem) => total + elem);
    return result;
  }

  const sumLeft = sumLeftDiag(arr);

  function sumRightDiag(arr) {
    let diagonalRight = [];
    let i = 0;
    let j = arr.length - 1;

    while (i < arr.length && j >= 0) {
      diagonalRight.push(arr[i][j]);
      i++;
      j--;
    }
    const result = diagonalRight.reduce((total, elem) => total + elem);
    return result;
  }

  const sumRight = sumRightDiag(arr);

  const result = Math.abs(sumLeft - sumRight);

  return result;
}

console.log(diagonalDifference(arr));
