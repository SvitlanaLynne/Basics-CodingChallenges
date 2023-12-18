// find the minimum number of characters to add to a password.

// min length 6
// 1 number
// 1 lowercase
// 1 uppercase
// 1 spec character

// const password = "2bbb";
// const password = "2bb#A";
// const password = "4700";
// const password = "Ab1";
const password = "79469625";
const n = password.length;

function findMinNumber(n, password) {
  const regNum = /\d+/;
  const regcharLow = /[a-z]/;
  const regcharUp = /[A-Z]/;
  const regspecChar = /[^a-zA-Z0-9]/;
  const reqArr = [regNum, regcharLow, regcharUp, regspecChar];
  let unfulfilled = 0;

  for (let elem of reqArr) {
    if (!elem.test(password)) {
      unfulfilled++;
    }
  }

  if (n < 6) {
    return unfulfilled > 6 - n ? unfulfilled : 6 - n;
  }

  return unfulfilled;
}

console.log(findMinNumber(n, password));
