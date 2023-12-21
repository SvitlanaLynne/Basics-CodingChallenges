// print Yes if the number of factors is even and No if odd.

const numsArr = [1, 2, 7, 169];

function checkOddFcators(arr) {
  // isOdd function
  function isOdd(num) {
    return num % 2 === 0 ? true : false;
  }

  // find factors function
  function findFactorsLength(num) {
    const factorsArr = [num];
    const sqrRoot = Math.sqrt(num);

    for (let i = 1; i <= sqrRoot; i++) {
      if (num !== 1) {
        num % i === 0 ? factorsArr.push(i) : null;
      }
    }
    return factorsArr.length;
  }

  // check the length of the results array
  const result = [];
  for (let elem of arr) {
    const length = findFactorsLength(elem);
    isOdd(length) === true ? result.push("NO") : result.push("YES");
  }
  console.log(result);
}

checkOddFcators(numsArr);


// OPTION 2

function isSmartNumber(num) {
    const sqrRoot = Math.sqrt(num);
    return num / sqrRoot === sqrRoot;
}

// hardcoded values for test

const numTests = 5;

for (let i = 0; i < numTests; i++) {
    const num = 16; // hardcoded
    const result = isSmartNumber(num);
    
    if (result) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
