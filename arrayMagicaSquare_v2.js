// Input : matrix 3x3 of integers
// Output: integer, a minimum cost to make the random square magical
// Magical if the sums of all rows, columns and diagonal are the same number.

const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

// label the rows, columns, diagonals
const a = s[0][0];
const b = s[0][1];
const c = s[0][2];

const d = s[1][0];
const e = s[1][1];
const f = s[1][2];

const g = s[2][0];
const h = s[2][1];
const i = s[2][2];

const r1 = [a, b, c];
const r2 = [d, e, f];
const r3 = [g, h, i];

const c1 = [a, d, g];
const c2 = [b, e, h];
const c3 = [c, f, i];

const d1 = [a, e, i];
const d2 = [c, e, g];

// sequence of the operations
const sequenceMap = {
  r1: r1,
  r2: r2,
  r3: r3,
  c1: c1,
  c2: c2,
  c3: c3,
  d1: d1,
  d2: d2,
};

const sequenceArr = ["r1", "r2", "r3", "c1", "c2", "c3", "d1", "d2"];

// Check if the matrix is magical
let MagBoolArr = [];
let MagSum = 0;

const isMagical = (MagBoolArr) => {
  MagBoolArr.reduce((total, current) => total + current) === 8 ? true : false;
};

/// find The Sum
// calc the Array of Sums
let ActualSumArr = [];
const ActualSum = (line) => line.reduce((total, current) => total + current, 0);

for (let key in sequenceMap) {
  if (sequenceMap.hasOwnProperty(key)) {
    const line = sequenceMap[key];
    const sum = ActualSum(line);
    ActualSumArr.push(sum);
  }
}
console.log("ActualSum Arr:", ActualSumArr);

// find the lines off
function mapFrequency (arr) {
  const map = {};

  arr.forEach((element, index) => {
    if (map[element]) {
      map[element].count += 1;
    } else {
      map[element] = { count: 1, index: index };
    }
  });

  return map;
};

const FrequencyMap = mapFrequency(ActualSumArr);

console.log("Frequency and indexes", JSON.stringify(FrequencyMap));

// find The Sum (most frequent in the object)
const TheSum = (obj) => {
let maxCount = 0;
let MagSum = 0;
for (let elem in obj){
  if (obj[elem].count >= maxCount){
    maxCount=obj[elem].count;
    MagSum = elem;
  }
}
return MagSum;
}

console.log("MOST FREQUENT SUM:", TheSum(FrequencyMap))


