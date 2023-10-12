// Devide an array to A and B subsets with the follwoing conditions:
// - they do not share the same figures
// - combined they form the initial array
// - sum of elements of A array is biger than the sum of the B subset
// - A subset is minimal
// - return A subset in the ascending order

function splitArray(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  let aSum = 0;
  const subsetA = [];
  let subsetB = [...arr];

  arr.sort((a, b) => b - a);

  for (const num of arr) {
    if (aSum > sum / 2) {
      break;
    }
    aSum += num;
    subsetA.push(num);
    subsetB = subsetB.filter((el) => el !== num);
  }

  return subsetA;
}

// const arr = [3, 7, 5, 6, 2];
// const result = splitArray(arr);
// console.log(result);
