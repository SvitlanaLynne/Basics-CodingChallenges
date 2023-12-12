// Shift each letter of the alphabet in the string by a given number.

// const s = "middle-Outz";
// const s = "Always-Look-on-the-Bright-Side-of-Life";
// const s = "Hello_World!(4)";
// const s = "www.abc.xy (87) //fff.jkl.gh";
const s = "www.abc.xy";
const k = 87;

function incrypt(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = alphabet.split("");
  const map = Object.fromEntries(arr.map((x, index) => [index + 1, x]));

  function findNonLetters(str) {
    const nonLetters = {};

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!/[a-zA-Z]/.test(char)) {
        if (!nonLetters[char]) {
          nonLetters[char] = [];
        }
        nonLetters[char].push(i);
      }
    }

    return nonLetters;
  }
  let symbolsObj = findNonLetters(s);
  console.log("Non-letters:", symbolsObj);

  function upperCaseIndexes(s) {
    const mapObj = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (char !== "-" && char === char.toUpperCase()) {
        if (!mapObj[char]) {
          mapObj[char] = [i];
        } else {
          mapObj[char].push(i);
        }
      }
    }
    const indexes = Object.values(mapObj).flat();

    return indexes;
  }

  console.log("Uppercases", upperCaseIndexes(s));
  const lowerCaseString = s.toLowerCase();

  // INITIAL INDEXES
  const initialIndexes = [];
  for (let char of lowerCaseString) {
    const index = Object.keys(map).find((key) => map[key] === char);
    initialIndexes.push(parseInt(index));
  }
  console.log("Initial indexes", initialIndexes);

  // NEW INDEXES
  let incryptIndexes = initialIndexes.map((x) => {
    if (k > 26) {
      k = k - 26 * Math.floor(k / 26);
    }
    return x + k;
  });

  incryptIndexes = incryptIndexes.map((elem) => {
    if (elem > 26) {
      elem = elem - 26;
    }
    return elem;
  });
  console.log("Incrypted indexes:", incryptIndexes);

  // RETRIEVE THE STRING
  let stringLowCase = "";

  function replaceSymbols(symbolsObj, incryptIndexes) {
    const indexesSymbolsArr = incryptIndexes.map((elem, index) => {
      if (isNaN(elem)) {
        elem = Object.keys(symbolsObj).find((value) =>
          symbolsObj[value].flat().includes(index)
        );
      }
      return elem;
    });
    return indexesSymbolsArr;
  }

  const indexesSymbolsArr = replaceSymbols(symbolsObj, incryptIndexes);
  console.log("Array with indexes and symbols", indexesSymbolsArr);

  for (let elem of indexesSymbolsArr) {
    if (typeof elem === "number") {
      stringLowCase = stringLowCase + map[elem];
    } else {
      stringLowCase = stringLowCase + elem;
    }
  }

  function replaceCase(str, indexArr) {
    const arr = str.split("");

    const result = arr.map((elem, index) =>
      indexArr.includes(index) ? elem.toUpperCase() : elem
    );

    return result.join("");
  }

  const incryptStr = replaceCase(stringLowCase, upperCaseIndexes(s));

  return incryptStr;
}

console.log(incrypt(s, k));
