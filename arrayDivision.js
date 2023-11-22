// Find how many options to divide an array meeting the conditions: m = quantity of elements in subarrays, d = their sum

const s = [2, 2, 1, 3, 2];
// const s = [3, 1, 2];
// const s = [2, 5, 1, 3, 2];
const d = 4;
const m = 2;

function countSubs(s, d, m) {
  let permutesArr = [];
  let count = 0;

  let i = 0;

  while (i < s.length) {
    let subArr = [];
    let j = i + 1;
    while (j < i + m) {
      subArr.push(s[j]);
      j++;
    }
    if (!subArr.includes(undefined)) {
      permutesArr.push([s[i], ...subArr]);
    }
    i++;
  }

  for (let elem of permutesArr) {
    let sum = elem.reduce((current, total) => current + total);

    if (sum === d) {
      count++;
    }
  }
  return count;
}

console.log(countSubs(s, d, m));
