// Return YES or NO
// if find an element
// sum of left elements =sum of right elements
// element itself is not included

// const arr = [1, 2, 3];
const arr = [1, 2, 3, 3];
// const arr = [2, 0, 0, 0];

// ACCEPTED SOLUTION, but I doubt it

function balancedSums(arr) {
  let right = arr.reduce((sum, el) => el + sum, 0) - arr[0];
  let left = 0;
  let i = 1;

  while (right >= left) {
    if (right === left) return "YES";
    left = left + arr[i - 1];
    right = right - arr[i];
    i++;
  }

  return "NO";
}

// balancedSums(arr);
console.log(balancedSums(arr));

//ATTEMPT 1 , NOT accepted as a correct solution

function findElement(arr) {
  // early: if the array consists of just 1 or 2 elements
  if (arr.length === 1) {
    arr = [0, ...arr, 0];
  } else if (arr.length === 2) {
    arr = [0, ...arr];
  }

  // early: if an array consists of one number amongs zeros
  const filteredZerosArr = arr.filter((x) => x !== 0);
  if (filteredZerosArr.length === 1) {
    return "YES";
  }

  for (let i = 1; i < arr.length - 1; i++) {
    let left = arr.slice(0, i);
    let leftSum = left.reduce((total, current) => total + current);

    let rightSum = arr[i + 1];

    function isLast(arr, i) {
      return i + 1 === arr.length;
    }

    // equal right away
    let j = i + 1;
    if (leftSum === rightSum && isLast(arr, j)) {
      return "YES";
    }
    // left bigger
    if (leftSum > rightSum) {
      while (leftSum > rightSum && j < arr.length) {
        rightSum = rightSum + arr[j];
        j++;
      }
      if (leftSum === rightSum && isLast(arr, j)) {
        return "YES";
      }
    }
    // right bigger
    if (leftSum < rightSum) {
      continue;
    }
    return "NO";
  }
  return "NO";
}

// console.log(findElement(arr));
