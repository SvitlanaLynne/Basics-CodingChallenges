// modify code so that XOR function works properly. (writen, not modified)

const s = "10101";
const t = "00101";

function main(s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  let result = "";

  for (i = 0; i < s.length; i++) {
    if (sArr[i] === tArr[i]) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
}

console.log(main(s, t));
