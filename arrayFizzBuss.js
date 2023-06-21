// Print numbers from 1 to a given number:
// If the number is divisible by both 3 and 5, it prints "FizzBuzz."
// If the number is only divisible by 3, it prints "Fizz."
// If the number is only divisible by 5, it prints "Buzz."
// Otherwise, it prints the number itself.

function FizzBuzzCheck(num)
{
    for (let i=1; i <= num; i++)
    {
        if(i % 3 == 0 && i % 5 == 0) { process.stdout.write("FIZZBUZZ\n") }
        else if (i % 5 == 0) { process.stdout.write("Buzz\n") }
        else if (i % 3 == 0) { process.stdout.write("Fizz\n") }
        else { process.stdout.write(i+"\n") }
    };
};

FizzBuzzCheck(50);


//An array of numbers and FizzBuzz

function fizzBuzzArr(num)
{
    let result = [];
    for (let i=1; i <= num; i++)
    {
        if(i % 3 == 0 && i % 5 == 0) { result.push("FIZZBUZZ") }
        else if (i % 5 == 0) { result.push("Buzz") }
        else if (i % 3 == 0) { result.push("Fizz") }
        else { result.push(i); }
    };
    return result;
};

console.log(fizzBuzzArr(50));

//A string 

function fizzBuzzStr(num)
{
    let iter = 1;
    let resultStr = "";

    do {
        if (iter % 15 === 0) {resultStr = "FizzBuzz "}
        else if (iter % 3 === 0) {resultStr = "Buzz "}
        else if (iter % 5 === 0) {resultStr = "Fizz "}
        else {resultStr = iter+" "};

        iter++;
        console.log(resultStr);
    }
    while ( iter <= num );
};

fizzBuzzStr(50);