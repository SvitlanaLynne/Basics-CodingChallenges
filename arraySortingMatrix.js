// Return YES or NO if the array are/can be sorted, both within an element and array:
// only within an element sorting allowed - no rearranging elements

// const arr = ["ebacd", "fghij", "olmkn", "trpqs", "xywuv"];
const arr = ["abc", "ade", "efg"];

function isSortedDesc(grid) {
  const sorted = grid
    .map((string) => string.split(""))
    .map((subArr) => subArr.sort((a, b) => a.localeCompare(b)).join(""));

  const strLength = grid[0].length;

  for (let j = 0; j < strLength; j++) {
    for (let i = 0; i < strLength - 1; i++) {
      let current = sorted[i].charAt(j);
      let next = sorted[i + 1].charAt(j);
      if (current > next) {
        return "NO";
      }
    }
  }
  return "YES";
}
