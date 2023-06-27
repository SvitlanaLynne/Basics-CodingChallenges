// Swap particular elements of an array

const myArray = [9,8,7,6,5,4,3];


function swap(arr,i,j)
{
    let temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;

    console.log(arr);
};

swap(myArray,0,1);