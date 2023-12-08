// Split a string into a sequence. Check if the next element is +1
// Print YES x  or NO
// (x= min element of an increasing sequence. if multiple, take the min)

// const s = "1234";
// const s = "99100101";
// const s = "91011";
// const s = "1920212223";
// const s = "444444454446";
// const s = "110111112";
// const s = "101102103"; <==================
const s = "121314";
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
  let beautiful;

  while (beautiful !== true && beautiful !== false) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] == 1) {
        beautiful = true;
      } else {
        // // --------------- check if the current is CRITICAL
        // if (isCritical(arr[i])) {
        //   // 1) try array
        //   console.log(
        //     "current element is critical",
        //     arr[i],
        //     "its index is",
        //     i,
        //     "test its next element..."
        //   );

        //   // const digits = arr[i].length;
        //   // const step = digits + 1;
        //   const tryArr = reassambleInCriticalCase(i, step, arr);

        //   console.log("\nTRY array in CRITICAL case:", tryArr);

        //   // 2) is next 10..?
        //   if (tryArr[i + 1] - arr[i] == 1) {
        //     arr = tryArr;
        //     console.log(
        //       "\nArray is now (should be equal to the try-array)",
        //       arr
        //     );
        //     break;
        //   }
        // }
        // //  ------------------------------------------------
        // // TRY MORE DIGITS

        const digits = arr[i].length;
        const step = digits + 1;

        console.log("\nstuck after", arr[i], "index", i, "reassembling...");
        console.log("current digits", digits);
        console.log("current step", step);

        let reassambledArr = reassamble(i, digits, step, s);
        console.log("after reassembling, the output array", reassambledArr);

        if (
          reassambledArr.length === s.length ||
          reassambledArr[0].toString() === s
        ) {
          // ---- NO, did not help. Check if reassembling changed anything OR did not find the starting point and reassembled all in one piece
          console.log("\nReassembling did NOT help");
          beautiful = false;
          // break;
        } else {
          // ---- YES, helped.
          arr = reassambledArr;
          console.log("\nREASSEMBLED ARR:", arr);
        }
      }
    }
  }
  // all elements are checked, beautiful is...
  if (beautiful === true) {
    console.log(` basic check, YES ${arr[0]}`);
  } else {
    console.log("NO, still not true");
  }

  function isCritical(num) {
    const string = num.toString();
    const splitArr = string.split("");
    return splitArr.every((x) => x === "9"); // returns true or false
  }

  function reassamble(i, digits, step, s) {
    console.log("cut first", i + 1 + 1);
    console.log("step to cut the tail", step);
    const nose = s.slice(0, i + 1 + 1);
    const tail = s.slice(i + 1 + 1);

    console.log("--- reassembling ---nose", nose);
    console.log("--- reassembling ---tail", tail);
    // const noseNum = parseInt(nose);

    const tailArr = [];
    for (i = 0; i < tail.length; i += step) {
      tailArr.push(tail.slice(i, i + step));
    }
    return [nose, ...tailArr]; // returns a new array
  }

  function reassambleInCriticalCase(i, step, arr) {
    const nose = arr.slice(0, i + 1);
    const tail = arr.slice(i + 1).join("");

    const tailArr = [];
    for (i = 0; i < tail.length; i += step) {
      tailArr.push(tail.slice(i, i + step));
    }
    return [...nose, ...tailArr]; // returns a new array
  }
}
// console.log(splitString(s));
splitString(s);
