// Count the number of changed letters of the message

// const S = "SOSTOT";
const s = "SOSSPSSQSSOR";

function countLetters(s) {
  const wrongMessagesArr = s.match(/.{1,3}/g).filter((elem) => elem !== "SOS");

  let count = 0;

  for (let elem of wrongMessagesArr) {
    const lettersArr = elem.split("");

    if (lettersArr[0] !== "S") {
      count++;
    }
    if (lettersArr[1] !== "O") {
      count++;
    }
    if (lettersArr[2] !== "S") {
      count++;
    }
  }
  return count;
}

console.log(countLetters(s));
