// 2 arrays with diferent start and step.
// return YES if they can reach the same number and NO if not.

const x1 = 2;
const v1 = 1;

const x2 = 1;
const v2 = 2;

function check(x1, v1, x2, v2) {
  return (v1 > v2 && (x2 - x1) % (v1 - v2)) === 0 ? "YES" : "NO";
}
console.log(check(x1, v1, x2, v2));
