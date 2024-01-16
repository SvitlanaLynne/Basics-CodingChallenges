// given 2 dates, transform all dates between them into integeres concatting months and years only
// print  the Number of integers, which can be divided by 4 or 7

const input = "02-08-2025 04-09-2025";
// const str = "10-08-2001 15-09-2002";

function checkLucky(input) {
  //convert to needed format
  const uv = input.split(" ");
  const formattedUV = uv.map((x) => {
    const parts = x.slice(0, 5).split("-");
    const year = x.slice(-4);
    return `${parts[1]}-${parts[0]}-${year}`;
  });
  // console.log(uv);
  // console.log("formatted uv", formattedUV);

  // dates array
  let startDate = new Date(formattedUV[0]);
  const endDate = new Date(formattedUV[1]);

  let datesArr = [];
  const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

  while (startDate <= endDate) {
    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();

    datesArr.push(`${day}-${month}-${year}`);
    startDate.setTime(startDate.getTime() + oneDay);
  }

  // console.log("dates array", datesArr);

  // numbers array
  const numArr = datesArr.map((x) => {
    let [d, m, y] = x.split("-");
    if (m.length < 2) {
      m = "0" + m;
    }
    return parseInt(d + m + y);
  });

  // Check 4 and 7
  let count = 0;
  for (const elem of numArr) {
    if (elem % 4 === 0 || elem % 7 === 0) {
      count++;
    }
  }

  console.log(count);
  return count;
}

console.log(checkLucky(input));

const reverseDayAndMonth = (dateStr) => {
  let parts = dateStr.split("-");
  let day = parts[0];
  let month = parts[1];
  let year = parts[2];

  const newDateStr = month + "-" + day + "-" + year;

  return newDateStr;
};
