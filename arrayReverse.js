// Reverse an array 


//1.
// Function

const wordsArr = ["dog", "likes", "Bob", "cat", "likes", "Susan" ];


function reverseArr (arr)
{
    let j = arr.length-1;
    let i = 0;

    while (i <= j-1)
    {
        let tmp = arr[i];

        arr[i] = arr[j];
        arr[j] = tmp;

        i++;
        j--;
    };

    process.stdout.write(arr+"\n");
};

reverseArr(wordsArr);



//2. 
// .reverse() method

console.log(wordsArr.reverse());


