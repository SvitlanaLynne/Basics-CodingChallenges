//Categorize the array into 3 sets: Odd, Even and Prime numbers

const numArr = [1,2,3,4,5,66,-12,3,-5,3,42,8,7,90,223,-12];
// const numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

function EvenOddPrimeCheck(arr)
{
    const evenArr = [];
    const oddArr = [];
    const primeArr = [];

    function isEven(arr)
    {
        arr.map((elem) => elem % 2 === 0 ? evenArr.push(elem):"");
        process.stdout.write("Even: "+ evenArr +"\n");
    };
    function isOdd(arr)
    {
        arr.map((elem) => elem % 2 !== 0 ? oddArr.push(elem):"");
        process.stdout.write("Odd: "+ oddArr +"\n");
    };
    function isPrime(arr)
    {
        const primeNum  = (num) => {

            if (num <= 2) {return false} 

            for (let divisor = 2; divisor <= Math.sqrt(num); divisor++)
            {
                if (num % divisor === 0)
                { return false }
            };
            return true ;
        };

        arr.map ((elem) => primeNum(elem) == true ? primeArr.push(elem) : "");
        process.stdout.write("Prime: "+ primeArr + "\n");
    };

    isEven(arr);
    isOdd(arr);
    isPrime(arr);
};

EvenOddPrimeCheck(numArr);