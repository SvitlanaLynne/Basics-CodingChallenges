
//Find out
//1) if the array of a particular size and
//2) how many times a given number is present in the array.


const myArr =[5,6,9,3,21,8,9,4,5,6,8];


function checkTwoParams (Arr,sizeNum,matchNum) {
//1) if the array of a certain size

   if (Arr.length == sizeNum)
   {
    console.log("Your array's size", sizeNum);
   } else {
    console.log("\n"+"Your array is not the size", Arr.length);
   };

//2) how many times the given number is present in the array

let count = 0;
   for (elem of Arr) {
        if (elem == matchNum)
        {
            count++;
        }
    }
    console.log("\n"+"The number", matchNum, "appears", count, "times"+"\n");
};


checkTwoParams(myArr,6,9);
