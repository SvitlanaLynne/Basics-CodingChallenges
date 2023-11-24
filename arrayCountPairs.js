// Count pairs of elements

const ar = [1, 2, 1, 2, 1, 3, 2];

function countPairs(ar) {
  const set = [...new Set(ar)];
  let colorCounts = {};
  let count = 0;

  for (const elem of set) {
    const count = ar.filter((x) => x === elem).length;
    colorCounts[elem] = count;
  }

  for (const elem in colorCounts) {
    if (colorCounts[elem] >= 2) {
      const quotient = Math.floor(colorCounts[elem] / 2);
      count = count + quotient;
    }
  }

  return count;
}

console.log(countPairs(ar));
