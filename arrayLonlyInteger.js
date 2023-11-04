// all elements appear in an array twice, except for one. find it.

// const a = [1, 2, 3, 4, 3, 2, 1];
const a = [0, 0, 1, 2, 1];
// const a = [9, 9, 9, 9, 9, 9];

function findLonlyInteger(a) {
  let firstElement = a.slice(0, 1)[0];
  let arrayWithoutFirst = a.slice(1);

  while (arrayWithoutFirst.length !== 1) {
    if (arrayWithoutFirst.includes(firstElement)) {
      arrayWithoutFirst = arrayWithoutFirst.filter(
        (elem) => elem !== firstElement
      );
      firstElement = arrayWithoutFirst.slice(0, 1)[0];
      arrayWithoutFirst = arrayWithoutFirst.slice(1);
    } else {
      return firstElement;
    }
  }
}

console.log(findLonlyInteger(a));
// findLonlyInteger(a);
