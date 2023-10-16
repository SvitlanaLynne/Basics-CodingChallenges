// print ratios of positive, negative and  zero elements in an array
// answers should be fractions with 6 places after decimal

let arr = [-4, 3, -9, 0, 4, 1];

function Ratios(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let elem of arr) {
    if (elem > 0) {
      positiveCount++;
    } else if (elem < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  let positiveRatio = (positiveCount / arr.length).toFixed(6);
  let negativeRatio = (negativeCount / arr.length).toFixed(6);
  let zeroRatio = (zeroCount / arr.length).toFixed(6);

  console.log(positiveRatio + "\n" + negativeRatio + "\n" + zeroRatio);
}

Ratios(arr);

// alternative version (optimized)
function Ratios(arr) {
  const n = arr.length;
  const counts = { positive: 0, negative: 0, zero: 0 };

  for (const elem of arr) {
    if (elem > 0) {
      counts.positive++;
    } else if (elem < 0) {
      counts.negative++;
    } else {
      counts.zero++;
    }
  }

  const toFixed6 = (count) => (count / n).toFixed(6);
  const [positiveRatio, negativeRatio, zeroRatio] = [
    toFixed6(counts.positive),
    toFixed6(counts.negative),
    toFixed6(counts.zero),
  ];

  console.log(positiveRatio + "\n" + negativeRatio + "\n" + zeroRatio);
}
