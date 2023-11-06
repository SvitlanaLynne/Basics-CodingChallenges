// Round numbers according to the scheme
// if number less 38, do not round
// (number - next multiple of 5) < 3 => round to next multiple

// const grades = 84;
// const grades = 29;
const grades = 57;

function roundNumbers(grades) {
  const multiple5 = (num) => {
    while (num % 5 !== 0) {
      num++;
    }
    return num;
  };

  let nextMultiple = multiple5(grades);
  let difference = nextMultiple - grades;

  if (grades < 38 || difference >= 3) {
    return grades;
  } else {
    return nextMultiple;
  }
}

// optimized version

function roundNumbers(grades) {
  if (grades < 38 || grades % 5 < 3) {
    return grades;
  } else {
    return grades + 5 - (grades % 5);
  }
}

console.log(roundNumbers(grades));
// roundNumbers(grades);
