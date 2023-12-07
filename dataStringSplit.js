// Split a string into a sequence. Check if the next element is +1
// Print YES x  or NO
// (x= min element of an increasing sequence. if multiple, take the min)

// const s = "1234";
const s = "99100101";
// const s = "91011";
// const s = "1920212223";
// const s = "444444454446";
// const s = "110111112";
// const s = "101102103";
// const s = "121314";
// const s = "123124125";
// const s = "1819212223";
// const s = "2456";
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
  let arr = s.split("").map((x) => parseInt(x));
  console.log("initial array:", arr);

  // Starts with "0" or Single element
  if (arr[0] == 0 || arr.length === 1) {
    console.log(`NO`);
    return;
  }

  // Loop until the result is found (true or false)
  let beautiful;

  while (beautiful !== true && beautiful !== false) {
    let boolArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] === 1) {
        boolArr.push(true);
      } else {
        // check if the current is critical
        if (isCritical(arr[i])) {
          const tryArr = testCriticalNext(arr[i], s);

          // is next reassembled element is 10...?
          console.log("TryArr", tryArr);
          if (tryArr[0] - arr[i] === 1) {
            arr = tryArr;
            break;
          }
        } else {
          // try more digits
          console.log("stuck on:", arr[i], "reassembling...");
          const digits = i + 1;
          let reassambledArr = reassamble(arr[i], digits, s);
          // ---- NO, did not help. Check if reassembling changed anything OR did not find the starting point and reassembled all in one piece
          if (reassambledArr.length === arr.length || arr[0].toString() === s) {
            beautiful = false;
            boolArr.push(false);
            break;
          } else {
            // ---- YES, helped.
            arr = reassambledArr;
            console.log("REASSEMBLED ARR:", arr);
          }
        }
      }
    }
    // all elements are checked, beautiful is...
    if (boolArr.includes(false)) {
      beautiful = false;
      console.log("NO");
    } else {
      beautiful = true;
      console.log(`YES ${arr[0]}`);
    }
    return beautiful;
  }

  function testCriticalNext(num, s) {
    let digits = num.toString().length;
    const reassembledArr = reassamble(digits, digits + 1, s); // returns an array, where the num is the first elemnt, the rest is sliced with more digits
    reassembledArr.shift();
    return reassembledArr; // returns the sliced tail
  }

  function isCritical(num) {
    const string = num.toString();
    const splitArr = string.split("");
    return splitArr.every((x) => x === "9"); // returns true or false
  }

  function reassamble(breakpoint, step, s) {
    const nose = s.slice(0, breakpoint); // from beginning, including
    const tail = s.slice(breakpoint); // not including breakpoint
    const noseNum = parseInt(nose);

    const tailArr = [];
    for (i = 0; i < tail.length; i += step) {
      tailArr.push(parseInt(tail.slice(i, i + step)));
    }
    return [noseNum, ...tailArr]; // returns a new array
  }
}

// console.log(splitString(s));
splitString(s);

// duplicates
// if (first === 9) {
//   let i = 0;
//   while (arr[i + 1] === 9) {
//     first = first * 10 + 9;
//     i++;
//   }
