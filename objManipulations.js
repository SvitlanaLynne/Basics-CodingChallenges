//Manipulations that can be done on objects.

const myObj = { name: "journal",
                type: "lined",
                size: "small",
                color: "blue" };



//1.
// Accessing the object's properties in 2 ways

console.log(myObj.type); // by dot notation

console.log(myObj['size']); // by string in brackets

//2.
// Add or modify

myObj.year = "2005"; // add
myObj.color = "light blue"; // modify
console.log("Modified obj", myObj);

//3. 
// Delete

delete myObj.type;
console.log(myObj);

//4.
// Iterate with for-loop and "let in"

for (key in myObj)
{
    console.log(key + "....." + myObj[key])
};
// console.log(myObj);

//5.
//Check property's existance with "in"

console.log("color" in myObj);
console.log("pages" in myObj);
