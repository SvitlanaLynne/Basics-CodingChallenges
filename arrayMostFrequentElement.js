// Write a function returning the element, which appears the most times along with how many times in the following form: [x,y],
//where x - element, y - how many times.

const myArr = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];


function mostFrequentElement(arr)
{
    const mySet = [...new Set(arr)];
    

    let result = [];

    for(elem of mySet)
    {
        const count = arr.reduce((total,element) => {
            if (element === elem) {
                return total+1
            }
            else {
                return total;
            }
        },0)
        result.push(count);
    };

    
    const max = Math.max(...result);

    return [ mySet[result.indexOf(max)], max ]   
};

console.log(mostFrequentElement(myArr));
