// sort ascend missing numbers in 2 arrays.
// compare frequency of duplicates. if different, include to the missing numbers

// const arr = [7, 2, 5, 3, 5, 3];
const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206];
// const brr = [7, 2, 5, 4, 6, 3, 5, 3];
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204];

function findMissing(arr, brr) {
  const setA = [...new Set(arr)];
  const setB = [...new Set(brr)];

  const missingAArr = checkInclude(setA, setB);
  const missingBArr = checkInclude(setB, setA);
  const sameArr = findSame(setA, setB);
  const frequenciesAObj = findfrequency(arr);
  const frequenciesBObj = findfrequency(brr);
  const missingFreqs = compareFreqs(frequenciesAObj, frequenciesBObj, sameArr);

  const result = [...missingAArr, ...missingBArr, ...missingFreqs].sort(
    (a, b) => a - b
  );

  //   console.log("not in the first array", missingAArr);
  //   console.log("not in the second array", missingBArr);
  //   console.log("Same elements", sameArr);
  //   console.log("freqs A", frequenciesAObj);
  //   console.log("freqs B", frequenciesBObj);
  //   console.log("Array of different freqs:", missingFreqs);

  function compareFreqs(freqA, freqB, sameArr) {
    let resultArr = [];

    for (let elem of sameArr) {
      freqA[elem] !== freqB[elem] ? resultArr.push(elem) : "";
    }
    return resultArr;
  }
  function findfrequency(Array) {
    const freqObj = Array.reduce((Obj, current) => {
      Obj[current] = (Obj[current] || 0) + 1;
      return Obj;
    }, {});
    return freqObj;
  }

  function findSame(array, barray) {
    let short;
    let long;
    if (array.length <= barray.length) {
      short = array;
      long = barray;
    } else {
      short = barray;
      long = array;
    }

    let same = [];
    for (let elem of short) {
      long.includes(elem) ? same.push(elem) : null;
    }
    return same;
  }

  function checkInclude(array1, array2) {
    const array1Copy = array1.slice();

    let remainedArray2 = array2;
    while (array1Copy.length > 0) {
      let elem = array1Copy[0];
      remainedArray2 = remainedArray2.filter((x) => x !== elem);
      array1Copy.shift();
    }

    return remainedArray2;
  }
  console.log("RESULT", result);
  return result;
}

findMissing(arr, brr);
