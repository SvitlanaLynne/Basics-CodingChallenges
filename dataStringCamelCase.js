// Modify the input with the fillowing conditions:

// S - input: camelCase; output:  split with space, lower case;
// C - input: spaced,  lower case ; output: camelCase string;
//  if method, add () to the output;
// consolelog the output

const str0 = "S;M;plasticCup()";
const str1 = "C;V;mobile phone";
const str2 = "C;C;coffe machine";
const str3 = "S;C;LargeSoftBook";
const str4 = "C;M;white sheet of paper";
const str5 = "S;V;pictureFrame";

const str10 = "S;V;iPad";
const str11 = "C;M;mouse pad";
const str12 = "C;C;code swarm";
const str13 = "S;C;OrangeHighlighter";

let input = str10 + "\n" + str11 + "\n" + str12 + "\n" + str13;

function processData(input) {
  const inputBreakDown = input.split("\n");

  function splitMod(str) {
    const splitStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    return splitStr;
  }
  function combMod(str) {
    const splitArr = str.split(" ");
    for (let i = 1; i < splitArr.length; i++) {
      splitArr[i] = splitArr[i].replace(/[a-z]/, (match) =>
        match.toUpperCase()
      );
    }
    const result = splitArr.join("");
    return result;
  }

  function caseChange(str) {
    // task extract
    const taskArr = str.slice(0, 3).split(";");

    // task off
    str = str.slice(4);

    // parentheses off
    if (str.endsWith("()") == true) {
      str = str.slice(0, -2);
    }

    //check;
    switch (taskArr[0]) {
      case "S":
        str = splitMod(str);
        if (taskArr[1] === "C" || taskArr[1] === "V") {
          str = str.replace(/[a-z]/, (match) => match.toLowerCase());
        }
        break;
      case "C":
        str = combMod(str);
        if (taskArr[1] === "M") {
          str = `${str}()`;
          str = str.split("").join("");
        } else if (taskArr[1] === "C") {
          str = str.replace(/[a-z]/, (match) => match.toUpperCase());
        }
        break;
    }

    str = str.split("").join("");
    console.log(str);
  }

  for (elem of inputBreakDown) {
    caseChange(elem);
  }
}

processData(input);

// console.log(inputBreakDown);

// caseChange(str0);
// caseChange(str1);
// caseChange(str2);
// caseChange(str3);
// caseChange(str4);
// caseChange(str5);
