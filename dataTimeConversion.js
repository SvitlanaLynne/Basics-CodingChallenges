let s = "12:00:00PM";

function convertTime(s) {
  let splitArr = s.split(":");
  let hours = parseInt(splitArr[0]);
  let minutes = splitArr[1];
  let seconds = splitArr[2].slice(0, 2);
  let period = splitArr[2].slice(2);

  if (hours === 12 && period === "AM") {
    hours = "00";
  } else if (period === "AM") {
    hours = splitArr[0];
  }
  if (hours === 12 && period === "PM") {
    hours = "12";
  } else if (period === "PM") {
    hours += 12;
  }

  let result = `${hours}:${minutes}:${seconds}`;

  return result;
}

console.log(convertTime(s));

