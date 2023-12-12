// Split a string into a sequence. Check if the next element is +1
// Print YES x  or NO
// (x= min element of an increasing sequence. if multiple, take the min)

const s = "1234";
// const s = "56778";
// const s = "99100101";
// const s = "91011";
// const s = "1920212223";
// const s = "444444454446";
// const s = "110111112";
// const s = "101102103";
// const s = "121314";
// const s = "122123124";
// const s = "123124125";
// const s = "1819212223";
// const s = "2456";
// const s = "23456";
// const s = "67686869100";

// const s = "7";
// const s = "101103";
// const s = "010203";
// const s = "13";
// const s = "1";
// const s = "91112";
// const s = "10203";

// const s = "99910001001";
// const s = "7891011";
// const s = "9899100";
// const s = "999100010001";
// const s = "99910001001";

//10
// 90071992547409929007199254740993
// 45035996273704964503599627370497
// 22517998136852482251799813685249
// 11258999068426241125899906842625
// 562949953421312562949953421313
// 90071992547409928007199254740993
// 45035996273704963503599627370497
// 22517998136852481251799813685249
// 11258999068426240125899906842625
// 562949953421312462949953421313

// YES 9007199254740992
// YES 4503599627370496
// YES 2251799813685248
// YES 1125899906842624
// YES 562949953421312
// NO
// NO
// NO
// NO
// NO

function splitString(s) {
  //Initial Array
  let arr = s.split("");
  console.log("initial array:", arr);

  // Starts with "0" or Single element
  if (arr[0] == 0 || arr.length === 1) {
    console.log(`NO`);
    return;
  }
  //Starts with many "9"s
  if (arr[0] == "9") {
    let i = 0;
    let first = "9";
    let count = 0;
    while (arr[i] === "9") {
      count++;
      i++;
    }
    first = first.repeat(count);
    console.log("FIRST", first);
    const part2 = arr.splice(first.length);

    arr = [first, ...part2];

    console.log("\nCkecked many 9-s, initial array is transformed to:", arr);
  }

  // Loop until the result is found (true or false)
  let resultFound = false;

  while (resultFound !== true) {
    let boolArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] == 1) {
        boolArr.push(true);
      } else {
        // 1
        boolArr.push(false);
        // 2 --------------- check if the current is CRITICAL
        if (isCritical(arr[i])) {
          // 1) try array
          console.log(
            "current element is critical",
            arr[i],
            "its index is",
            i,
            "test its next element..."
          );

          const tryArr = reassambleInCriticalCase(i, arr);
          console.log("\nTRY array in CRITICAL case:", tryArr);

          // 2) is next 10..?
          if (tryArr[i + 1] - arr[i] == 1) {
            arr = tryArr;
            console.log(
              "\nArray is now (should be equal to the try-array)",
              arr
            );
            break;
          }
        }
        //  ------------------------------------------------

        // 3 TRY MORE DIGITS
        console.log("\nstuck after", arr[i], "index", i, "reassembling...");

        let reassambledArr = reassamble(arr[i], s);

        console.log("result of reassembling is", reassambledArr);
        console.log("initial array is", arr);

        if (reassambledArr.length === arr.length || reassambledArr[0] === s) {
          console.log("EXIT with NO");
          return;
        }

        // 4 Rewrite the arr
        arr = reassambledArr;
        console.log("\nLength comparison is false, REASSAMBLED ARR", arr);
      }
    }
    console.log(boolArr);
    if (!boolArr.includes(false)) {
      console.log("EXIT with YES");
      resultFound = true;
    }
  }

  function isCritical(num) {
    const string = num.toString();
    const splitArr = string.split("");
    return splitArr.every((x) => x === "9"); // returns true or false
  }

  function reassamble(elem, s) {
    console.log("Reassembling function...");
    const digits = elem.length + 1; // including
    const step = digits;
    console.log("cut first", digits);
    console.log("step to cut the tail", step);
    const nose = s.slice(0, digits);
    const tail = s.slice(digits);

    console.log("--- reassembling ---nose", nose);
    console.log("--- reassembling ---tail", tail);
    // const noseNum = parseInt(nose);

    const tailArr = [];
    for (let i = 0; i < tail.length; i += step) {
      tailArr.push(tail.slice(i, i + step));
    }
    return [nose, ...tailArr]; // returns a new array
  }

  function reassambleInCriticalCase(i, arr) {
    const digits = arr[i].length;
    const step = digits + 1;

    const nose = arr.slice(0, i + 1);
    const tail = arr.slice(i + 1).join("");

    const tailArr = [];
    for (let i = 0; i < tail.length; i += step) {
      tailArr.push(tail.slice(i, i + step));
    }
    return [...nose, ...tailArr]; // returns a new array
  }
}
// console.log(splitString(s));
splitString(s);

// SKELETON
// let resultFound = false;

// while (resultFound !== true) {
//   let boolArr = [];
//   for (i = 0; i < 3; i++) {
//     if (2 === 3) {
//       boolArr.push(true);
//     } else {
//       boolArr.push(false);
//       if (2 === 2) {
//         console.log("should now exit the whole While loop. NO");
//         // resultFound = true;
//         return;
//       }
//     }
//   }
//   console.log(boolArr);
//   if (!boolArr.includes(false)) {
//     console.log("no False in the boolArr. YES");
//     resultFound = true;
//   }
// }

// Uncommented, no console.log-s
// let arr = s.split("");
// console.log("initial array:", arr);

// if (arr[0] == 0 || arr.length === 1) {
//   console.log(`NO`);
//   return;
// }

// if (arr[0] == "9") {
//   let i = 0;
//   let first = "9";
//   let count = 0;
//   while (arr[i] === "9") {
//     count++;
//     i++;
//   }
//   first = first.repeat(count);
//   const part2 = arr.splice(first.length);

//   arr = [first, ...part2];
// }

// let resultFound = false;

// while (resultFound !== true) {
//   let boolArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] == 1) {
//       boolArr.push(true);
//     } else {
//       boolArr.push(false);

//       if (isCritical(arr[i])) {

//         const tryArr = reassambleInCriticalCase(i, arr);

//         if (tryArr[i + 1] - arr[i] == 1) {
//           arr = tryArr;
//           break;
//         }
//       }

//       let reassambledArr = reassamble(arr[i], s);

//       if (reassambledArr.length === arr.length || reassambledArr[0] === s) {
//         console.log(`NO`);
//         return;
//       }

//       arr = reassambledArr;
//     }
//   }
//   console.log(boolArr);
//   if (!boolArr.includes(false)) {
//     console.log(`YES ${arr[0]}`);
//     resultFound = true;
//   }
// }

// function isCritical(num) {
//   const string = num.toString();
//   const splitArr = string.split("");
//   return splitArr.every((x) => x === "9");
// }

// function reassamble(elem, s) {

//   const digits = elem.length + 1;
//   const step = digits;

//   const nose = s.slice(0, digits);
//   const tail = s.slice(digits);

//   const tailArr = [];
//   for (i = 0; i < tail.length; i += step) {
//     tailArr.push(tail.slice(i, i + step));
//   }
//   return [nose, ...tailArr];
// }

// function reassambleInCriticalCase(i, arr) {
//   const digits = arr[i].length;
//   const step = digits + 1;

//   const nose = arr.slice(0, i + 1);
//   const tail = arr.slice(i + 1).join("");

//   const tailArr = [];
//   for (i = 0; i < tail.length; i += step) {
//     tailArr.push(tail.slice(i, i + step));
//   }
//   return [...nose, ...tailArr];
// }
