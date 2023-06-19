//Create a set of functions to manipulate an instenced array.


// option 1
//---------
class mySet
{
    constructor()
    {
        this.myName = "mySet";
        this.data = [];
    };


    popArr()
    {
        this.data.pop();
    };

    pushArr(num)
    {
        if(this.checkDups(num) == false){

            this.data.push(num);
            return;
        };
    };


    checkDups(num)
    {

        if (this.data.includes(num))
        {
            return true;
        }
        return false;
    };

    displayResult()
    {
        console.table (this.data);
    };

    displayName()
    {
        console.log(this.myName);
    };

};



const createdSet = new mySet();
createdSet.displayName();

createdSet.pushArr(6);
createdSet.pushArr(8);
createdSet.pushArr(6);
createdSet.popArr();
createdSet.displayResult();



//option 2 
//------------------

class Set
{
    constructor()
    {
        this.content = [];
    };
    pushIntoArr(num)
    {
        if (!this.content.includes(num)) this.content.push(num)
    };

    display()
    {
        console.table (this.content);
    };
};

const secondSet = new Set();

secondSet.pushIntoArr(17);
secondSet.pushIntoArr(20);
secondSet.pushIntoArr(17);
secondSet.display();



//3 Class and check duplicates

class SetArr
{
    constructor(inputArray)
    {
        this.content = inputArray.sort((a,b) => a-b).filter((num, i, arr) =>num!==arr[i-1]? num : "");
    
    };

    display()
    {
        return this.content;
    };
};

const testArr = [4,5,7,8,3,3,5,-5,7,7,9,-6,7,5];

const result = new SetArr(testArr).display();

console.log(result);




