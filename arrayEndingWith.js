//Find the elements having a particular ending

// Using console.table
//--------------------

const myArr = ["Mark","Susie","Tom","Ariel","Denis","Jack"];

function ArrEndingWith (endLetter, Arr) {
    for (elem of Arr) {
        if (elem.endsWith(endLetter)) {
            console.table(elem);
        };
    };
};

ArrEndingWith("k",myArr);



//Using an empty array
//--------------------

const arrWords = ['mean','dansing','machine','kean','dreaming','washing'];

console.log(arrEndsWith(arrWords, 'ing'));

function arrEndsWith(arrWords,ending)
{
    const result = [];

    for(const word of arrWords)
    {
        if(word.endsWith(ending))
        {
            result.push(word);
        };
    };
    return(result);
};

