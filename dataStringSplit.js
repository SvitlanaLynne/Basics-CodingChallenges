// Split a string into a sequence. Check if the next element is +1
// Print YES x  or NO
// (x= min element of an increasing sequence. if multiple, take the min)

// const s = "1234";
// const s = "99100101";
// const s = "91011";
// const s = "1920212223";
// const s = "444444454446";
// const s = "110111112";
const s = "101102103";
// const s = "121314";
// const s = "123124125";
// const s = "1819212223";
// const s = "2456";
// const s = "67686869100"; <====

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

  // Loop until the result is found (true or false)
  let beautiful;

  while (beautiful !== true && beautiful !== false) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] === 1) {
        beautiful = true;
      } else {
        // check if the current is CRITICAL
        if (isCritical(arr[i])) {
          console.log(
            "current element is critical",
            arr[i],
            "its index is",
            i,
            "test its next element..."
          );
          const currentDigits = arr[i].toString().length;
          const isNext10 = testCriticalNext(arr[i], i, currentDigits, arr);
          // is next 10..?
          if (isNext10) {
            const digits = i + 1;
            let reassambledArr = reassamble(arr[i + 1], digits, s);
            console.log("\nREASSEMBLED in CRITICAL case:", reassambledArr);
            arr = reassambledArr;
            break;
          } else {
            // TRY MORE DIGITS
            console.log(
              "next after critical is 10:",
              isNext10,
              "trying more digits..."
            );
            const digits = i + 1 + 1; // next from current, plus shift from 0
            let reassambledArr = reassamble(i + 1 + 1, digits, s);
            console.log("REASSEMBLED array in critical case:", reassambledArr);
            // ---- NO, did not help. Check if reassembling changed anything OR did not find the starting point and reassembled all in one piece
            if (
              reassambledArr.length === arr.length ||
              arr[0].toString() === s
            ) {
              beautiful = false;
              boolArr.push(false);
              break;
            } else {
              // ---- YES, helped.
              arr = reassambledArr;
              console.log("\ncurrent array:", arr);
            }
          }
        } else {
          // TRY MORE DIGITS
          console.log("stuck on:", arr[i], "index", i, "reassembling...");
          const digits = arr[i].length + 1; // to include
          const step = digits; //
          let reassambledArr = reassamble(digits, step, s);
          console.log("after reassembling, the output array", reassambledArr);
          // ---- NO, did not help. Check if reassembling changed anything OR did not find the starting point and reassembled all in one piece
          if (
            reassambledArr.length === s.length ||
            reassambledArr[0].toString() === s
          ) {
            console.log("\nReassembling did NOT help");
            beautiful = false;
            break;
          } else {
            // ---- YES, helped.
            arr = reassambledArr;
            console.log("\nREASSEMBLED ARR:", arr);
          }
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
}

function testCriticalNext(elem, i, digits, arr) {
  arr.splice(0, i + 1);

  const str = arr.join("");

  const next = str.slice(0, digits + 1);

  console.log("TAIL", str);
  console.log("NEXT", next);

  if (next - elem === 1) {
    return true;
  } else {
    return false;
  }
}

function isCritical(num) {
  const string = num.toString();
  const splitArr = string.split("");
  return splitArr.every((x) => x === "9"); // returns true or false
}

function reassamble(digits, step, s) {
  console.log("cut first", digits);
  console.log("step to cut the tail", step);
  const nose = s.slice(0, digits); // from - to, not including
  const tail = s.slice(digits); // not including breakpoint

  console.log("--- reassembling ---nose", nose);
  console.log("--- reassembling ---tail", tail);
  // const noseNum = parseInt(nose);

  const tailArr = [];
  for (i = 0; i < tail.length; i += step) {
    tailArr.push(tail.slice(i, i + step));
  }
  return [nose, ...tailArr]; // returns a new array
}

// console.log(splitString(s));
splitString(s);

// function testCriticalNext(num, s) {
//   let digits = num.toString().length;
//   const reassembledArr = reassamble(digits, digits + 1, s); // returns an array, where the num is the first elemnt, the rest is sliced with more digits
//   reassembledArr.shift();
//   return reassembledArr; // returns the sliced tail
// }
// console.log(testCriticalNext(9, s));

// const s = "99100101";

// function reassamble(breakpoint, step, s) {
//   const nose = s.slice(0, breakpoint); // from beginning, including
//   const tail = s.slice(breakpoint); // not including breakpoint

//   console.log("nose", nose);
//   console.log("tail", tail);

//   const noseNum = parseInt(nose);

//   const tailArr = [];
//   for (i = 0; i < tail.length; i += step) {
//     tailArr.push(parseInt(tail.slice(i, i + step)));
//   }
//   console.log("reassembled array", [noseNum, ...tailArr]);
//   return [noseNum, ...tailArr]; // returns a new array
// }

// console.log(reassamble(1, 2, s));

// duplicates
// if (first === 9) {
//   let i = 0;
//   while (arr[i + 1] === 9) {
//     first = first * 10 + 9;
//     i++;
//   }

// function testCriticalNext(num, s) {
//   let digits = num.toString().length;
//   const reassembledArr = reassamble(digits, digits + 1, s); // returns an array, where the num is the first elemnt, the rest is sliced with more digits
//   reassembledArr.shift();
//   return reassembledArr; // returns the sliced tail
// }
