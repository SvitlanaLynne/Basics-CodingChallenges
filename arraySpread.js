// Use of Spread

const fruitsArr = ['Cherry','Apple','Grapes','Pear'];

const vegetablesArr = ['Tomato','Cucumber','Carrot'];

const combinedArr = [...fruitsArr, ...vegetablesArr];
fruitsArr.push(...vegetablesArr); // or push without brackets


console.log(combinedArr);
console.log(fruitsArr);

