// Count min and max Count of a sample table

// let scores = [12, 24, 10, 24];
let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

function CountRacords(scores) {
  let result = [];

  const gamesNum = scores.length;

  const minArr = () => {
    let arr = scores;

    let resultMinArr = [];
    resultMinArr.push(arr[0]);

    let min = arr[0];

    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        resultMinArr.push(min);
      } else {
        resultMinArr.push(resultMinArr[i - 1]);
      }
    }
    return resultMinArr;
  };
  const maxArr = () => {
    let arr = scores;
    let resultMaxArr = [];
    resultMaxArr.push(arr[0]);

    let max = arr[0];

    for (let i = 1; i <= arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        resultMaxArr.push(max);
      } else {
        resultMaxArr.push(resultMaxArr[i - 1]);
      }
    }
    return resultMaxArr;
  };

  let minArray = minArr();
  let maxArray = maxArr();

  const minCount = [...new Set(minArray)].length-1;
  const maxCount = [...new Set(maxArray)].length-1;

  result = [maxCount, minCount];

  console.table(minArray);
  console.table(maxArray);
  console.log(result);
  return result;
}

CountRacords(scores);
