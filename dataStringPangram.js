// determine whether a pangram or not

const s = "The quick brown fox jumps over the lazy dog";

function pangram(s) {
  const charArr = s.toUpperCase().replace(/\s/g, "").split("");
  const set = [...new Set(charArr)];

  return set.length === 26 ? "pangram" : "not pangram";
}

console.log(pangram(s));
