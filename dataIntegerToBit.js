// convert a number to a binary equivalent, flip it to the opposit and convert back to a number.


let n = 9;
// let n = 1;
// let n = 0;
function flippingBits(n) {
  let binary = n.toString(2);

  while (binary.length < 32) {
    binary = "0" + binary;
  }

  function flip(bitsNum) {
    const result = bitsNum
      .split("")
      .map((elem) => (elem === "0" ? "1" : "0"))
      .join("");
    return result;
  }
  const flipped = flip(binary);

  let convertedNumber = parseInt(flipped, 2);

  return convertedNumber;
}

const result = flippingBits(n);
console.log(result);
