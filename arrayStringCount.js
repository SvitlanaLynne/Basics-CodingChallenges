// Count how many times a string appears in an array

const namesArr = ['John','Brian','Sarah','Mike','Olha','Mike','George'];

function counting(arr,str)
    {
        let count = 0;
        for(elem of arr)
        {
            if(elem === str)
            {
             count++;
            };   
        };
        process.stdout.write("The string "+str+" appears "+count+" times\n");
    };
counting(namesArr,'Mike');