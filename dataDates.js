// given 2 dates, transform all dates between them into integeres concatting months and years only
// print  those integers, which can be divided by 4 or 7

const str = "10-08-2001 15-09-2002";

function checkLucky(str) {
  //convert to needed format
  const uv = str.split(" ");
  const formattedUV = uv.map((x) => {
    const parts = x.slice(0, 5).split("-");
    const year = x.slice(-4);
    return `${parts[1]}-${parts[0]}-${year}`;
  });
  console.log(uv);
  console.log("formatted uv", formattedUV);

  // dates array
  let startDate = new Date(formattedUV[0]);
  const endDate = new Date(formattedUV[1]);

  let datesArr = [];
  while (startDate <= endDate) {
    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index

    datesArr.push(`${month}-${year}`);
    startDate.setMonth(startDate.getMonth() + 1);
  }

  console.log("dates array", datesArr);

  // numbers array
  const numArr = datesArr.map((x) => {
    const [m, y] = x.split("-");
    return parseInt(m + y);
  });

  //

  return numArr;
}

console.log(checkLucky(str));

// function isDivisibleBy7(number) {
//   // Convert the number to a string to determine its length
//   const numStr = number.toString();
//   const length = numStr.length;

//   // Check if the length is even or odd
//   if (length % 2 === 0) {
//     // If the length is even, take two digits from the middle
//     const middleDigits = parseInt(numStr.substr(length / 2 - 1, 2), 10);
//     const remainingDigits = parseInt(
//       numStr.substr(0, length / 2 - 1) + numStr.substr(length / 2 + 1),
//       10
//     );

//     return (remainingDigits - middleDigits) % 7 === 0;
//   } else {
//     // If the length is odd, take one digit from the middle
//     const middleDigit = parseInt(numStr.charAt(length / 2), 10);
//     const remainingDigits = parseInt(
//       numStr.substr(0, length / 2) + numStr.substr(length / 2 + 1),
//       10
//     );

//     return (remainingDigits - middleDigit) % 7 === 0;
//   }
// }

// // Example usage with a 4-digit number
// const num = 4132;

// console.log(`${num} is divisible by 7: ${isDivisibleBy7(num)}`);
