// Count how many valleys on the path represented by a string (U (up) and D (down))

const path = "UDDDUDUU";
const steps = 8;
// const path = "DDUUDDUDUUUD";
// const steps = 12;

function CountValleys(steps, path) {
  const pathArr = path.split("");
  let total = 0;
  let count = 0;

  const numArr = pathArr.map((elem) => (elem === "D" ? -1 : 1));

  for (let i = 0; i < steps; i++) {
    total = total + numArr[i];
    console.log(total, "total");

    if (total === 0 && numArr[i] === 1) {
      count++;
    }
  }
  return count;
}

console.log(CountValleys(steps, path));
