// Return YES or NO if the array are/can be sorted, both within an element and array:
// only within an element sorting allowed - no rearranging elements

// const arr = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
const arr = ["abc", "ade", "efg"];

grid
  .map((x) => x.split(""))
  .map((elem) => elem.sort((a, b) => a.localeCompare(b)));

const rowsStart = grid.map((x) => x.slice(0, 1)).join("");
const sortedRows = rowsStart
  .split("")
  .sort((a, b) => a.localeCompare(b))
  .join("");

return rowsStart === sortedRows ? "YES" : "NO";

// function isSortedDesc(arr) {
//   arr.map((x) => x.split("")).map((elem) => elem.sort());

//   const rowsStart = arr.map((x) => x.slice(0, 1)).join("");
//   const sortedRows = rowsStart.split("").sort().join("");

//   return rowsStart === sortedRows ? "YES" : "NO";
// }

// function isSortedDesc(arr) {
//   arr.map((x) => x.split("")).map((elem) => elem.sort());

//   const rowsStart = arr.map((x) => x.slice(0, 1)).join("");
//   const sortedRows = rowsStart.split("").sort().join("");

//   return rowsStart === sortedRows ? "YES" : "NO";
// }
// function isSortedDesc(arr) {
//   const splitArr = arr.map((x) => x.split(""));
//   const sortedElemArr = splitArr.map((elem) => elem.sort());

//   let firstChars = [];
//   sortedElemArr.map((elem) => firstChars.push(elem[0])).join("");
//   const sortedFirstChars = firstChars.sort().join("");

//   return firstChars !== sortedFirstChars ? "YES" : "NO";
// }

console.log(isSortedDesc(arr));
