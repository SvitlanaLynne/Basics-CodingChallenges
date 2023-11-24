// Determin the most frequent element. if more thaan 1, pick the smallest

// const arr = [1, 1, 2, 2, 3];
// const arr = [1, 4, 4, 4, 5, 3];
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function maxCount(arr) {
  const countObj = {};
  let max = 0;
  let maxCount = 0;
  let subObj = {};

  const set = [...new Set(arr)];

  for (const elem of set) {
    const count = arr.filter((x) => x === elem).length;
    countObj[elem] = count;
  }

  for (const key in countObj) {
    if (countObj[key] >= max) {
      max = countObj[key];
    }
  }

  for (const key in countObj) {
    if (countObj[key] === max) {
      subObj[key] = countObj[key];
    }
  }

  const maxesArr = Object.values(countObj);
  for (const elem of maxesArr) {
    if (elem === max) {
      maxCount++;
    }
  }
  if (maxCount > 1) {
    const objKeys = Object.keys(subObj);
    const minId = objKeys.sort((a, b) => b - a)[objKeys.length - 1];
    return minId;
  } else {
    for (const key in subObj) {
      if (subObj[key] === max) {
        return key;
      }
    }
  }
}

console.log(maxCount(arr));
