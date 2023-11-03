// count how many times one array's element is present in anotgher array.

const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

function CountInstances(strings, queries) {
  let result = [];

  for (let elem of queries) {
    let elemCount = 0;
    for (let string of strings) {
      if (elem === string) {
        elemCount++;
      }
    }
    result.push(elemCount);
  }

  return result;
}

CountInstances(strings, queries);
