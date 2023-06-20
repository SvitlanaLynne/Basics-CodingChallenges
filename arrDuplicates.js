// 4 Ways to find duplicates in an array
//--------------------------------------

const myArr = [2,6,4,7,8,4,5,5,5,7,8,8,9,3,2,654,9,-12,34];


//1.
//Using Include()

function noDuplicates(arr)
{
    const result = [];
    arr.map((elem) => { return !result.includes(elem)? result.push(elem) : ""});

    console.log(result);
};

noDuplicates(myArr);


//2.
//Using new Set

const mySet = [...new Set(myArr)];
console.log(mySet);


//3.
//Using index and filtering

function noDups(arr)
{
    const newArr = arr.filter((elem, index) => { return arr.indexOf(elem) === index})
    console.log(newArr);
};
noDups(myArr);

//4.
//Comparing elements with the first one
function checkDups (Arr)
    {
        for (let i=0; i<Arr.length; i++)
        {
            let count = 1;
                for (let k=i+1; k<Arr.length; k++)
                    {
                        if (Arr[k] == Arr[i])
                        {
                            count = count+1;
                            Arr.splice(k,1);
                            k=k-1;
                        };
                    };
            if (count>1)
                {
                    console.log(Arr[i],"is present", count, "times");
                }
            count=1;
        };
        console.log(Arr);
    };

checkDups(myArr);