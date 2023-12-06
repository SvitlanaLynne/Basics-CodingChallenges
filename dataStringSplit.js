// Split a string into a sequence. Check if the next element is +1
// Print YES x  or NO
// (x= min element of an increasing sequence. if multiple, take the min)

// const s = "1234";
// const s = "99100101";
// const s = "91011";
// const s = "1920212223";
// const s = "444444454446";
// const s = "110111112";
// const s = "101102103";
// const s = "121314";
const s = "123124125";

function splitString(s) {
  let arr = s.split("").map((x) => parseInt(x));
  console.log("initial array:", arr);

  let first = arr[0];
  let decimals = 1;
  let boolArr = [];

  for (let d = 1; d <= decimals; d++) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] === 1) {
        console.log("first in the sequence:", first);
      } else {
        decimals++;
        reassemble(decimals);
        break;
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      boolArr.push(true);
    } else {
      boolArr.push(false);
    }
  }

  console.log("boolArr", boolArr);

  boolArr.includes(false) ? console.log(`NO`) : console.log(`YES${first}`);

  function reassemble(step) {
    // assemble first element
    first = parseInt(s.slice(0, step));
    console.log("\nFIRST", first);
    console.log("decimals at this stage", decimals);

    // check if 1st ends with 9
    // let char = "9";
    // let critical = parseInt(char.repeat(decimals));
    // console.log("CRITICAL", critical);

    // if (first === "9" || first === critical) {
    //   step++;
    //   console.log(decimals, step);
    // }

    // slice the tail
    let tail = s.slice(first.toString().length);
    console.log("TAIL", tail);
    let tailArr = [];
    for (let i = 0; i < tail.length; i += step) {
      tailArr.push(tail.slice(i, i + step));
    }
    // tailArr.shift();
    console.log("tailArr", tailArr);

    // glue first element and tail
    arr = [first, ...tailArr];
    console.log("REASSEMBLED ARR:", arr);
  }

  // check if ends with 9
  // let firstStr = first.toString();
  // let lastChar = firstStr[firstStr.length - 1];
  // console.log(lastChar);

  // if 9 in the first
  // let step = decimals;
  // if (arr[0] === 9 || lastChar === "9") {
  //   step = decimals + 1;
  // }
  // split to array
}

// console.log(splitString(s));
splitString(s);

// for (let i = 0; i <= arr.length; i++) {
//     // joined 9-s
//     while (arr[i] === 9) {
//       if (arr[i + 1] === 9) {
//         arr[i] = arr[i] * 10 + arr[i + 1];
//         arr.splice(i + 1, 1);
//       }
//       i++;
//     }
//
//   }

// checkFirstTwo(arr);

// function checkFirstTwo(arr) {
//   let boolArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] === 1) {
//       boolArr.push(true);
//     } else {
//       console.log("broke on:", arr[i]);
//       boolArr.push(false);
//       decimals = boolArr.length;
//       console.log("its decimals:", decimals);
//       reassemble(decimals);
//       break;
//     }
//   }
//   console.log("boolArr", boolArr);
//   console.log("first element:", first);
// }

// for (let d = 1; d < 6; d++) {
//   if (arr[1] - arr[0] === 1) {
//     console.log("assume first in the sequence:", first);
//     break;
//   } else {
//     decimals++;
//     reassemble(decimals);
//   }
// }

// if duplicate
// if (arr[0] === arr[1]) {
//   for (let j = 1; j < arr.length; j++) {
//     while (arr[0] === arr[j]) {
//       first = first * 10 + arr[j];
//       j++;
//       decimals++;
//     }
//   }
// }
