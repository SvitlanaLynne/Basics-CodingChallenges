// XOR possible subarrays
// XOR results, return

const arr = [3, 4, 5];
// const arr = [1, 2, 3];
// const arr = [4, 5, 7, 5];

// ---- to keep in mind ----
// Even arrays result in 0. XOR is applied to the sequence by pairs only: (a XOR b) XOR (c XOR d). Since a XOR a and b XOR b result in 0, and similarly for c XOR c and d XOR d, the overall result is 0.
// x XOR x = 0 .
// x XOR 0 is always x.
// x ^ y ^ z is occumulative operation. result of the 1st pair is compared with the next number.

function XOR(arr) {
  if (arr.length % 2 === 0) {
    return 0;
  } else {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result ^= arr[i];
      }
    }
    return result;
  }
}

const result = XOR(arr);
console.log(result);

// Brute-force option, suitable for simple examples only
// function XOR(arr) {
//   const resultsArr = [];

//   const subarrays = (arr) => {
//     let result = [];
//     let i = 1;
//     while (i <= arr.length) {
//       const subarr = arr.slice(0, i);
//       result.push(subarr);
//       i++;
//     }
//     return result;
//   };

//   subarrays(arr).map((subArr) => {
//     const xorResult = xorArr(subArr);
//     resultsArr.push(xorResult);
//   });

//   function xorArr(subarr) {
//     return subarr.reduce((total, curr) => total ^ curr);
//   }
//   return xorArr(resultsArr);
// }

// console.log(XOR(arr));
