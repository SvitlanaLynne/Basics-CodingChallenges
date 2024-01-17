// Return YES or NO
// if find an element
// sum of left elements =sum of right elements
// element itself is not included

// const arr = [1, 2, 3];
const arr = [1, 2, 3, 3];
// const arr = [2, 0, 0, 0];

function findElement(arr) {
  //   arr = [0, ...arr, 0];
  //     console.log("ARR", arr);

  for (let i = 1; i < arr.length - 2; i++) {
    let left = arr.slice(0, i);
    let leftSum = left.reduce((total, current) => total + current);
    // console.log("leftSum", leftSum);

    let rightSum = arr[i + 1];
    // console.log("rightSum", rightSum);

    function isLast(arr, i) {
      return i + 1 === arr.length;
    }
    //equal right away and 0
    // if (leftSum === rightSum && leftSum === 0) {
    //   const Elem = arr[i];
    //   //   console.log("elem", Elem);
    //   const filtered = arr.filter((x) => x !== Elem);
    //   //   console.log("filtered", filtered);
    //   const sum = filtered.reduce((total, curr) => total + curr);
    //   return sum === 0 ? "YES" : "NO";
    // }
    // equal right away
    let j = i + 1;
    if (leftSum === rightSum && isLast(arr, j)) {
      return "YES";
      //   return "YES, both conditions";
    }
    // left bigger
    if (leftSum > rightSum) {
      while (leftSum > rightSum && j < arr.length) {
        rightSum = rightSum + arr[j];
        j++;
      }
      if (leftSum === rightSum && isLast(arr, j)) {
        return "YES";
        // return "YES, left was bigger";
      }
      //   else {
      //     console.log("NO, not equal during search");
      //   }
    }
    // right bigger
    if (leftSum < rightSum) {
      //   console.log("Right bigger, continue");
      continue;
    }
    return "NO";
  }
  return "NO";
  //   console.log("NO, no equal conditions found");
}

console.log(findElement(arr));
// findElement(arr);
