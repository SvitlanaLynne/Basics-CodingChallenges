// 3 Ways to access the value in an Object

const person = {
    firstName: "Oliver",
    age:"14",
    hobbies: ["padding","reading"],
    country: "Canada",
};

//1. dot-notation
    console.log(person.country);

    
//2. brackets
    const {hobbies} = person;
    console.log(hobbies);


//3. brackets and alias
    const {age: yearsOld} = person;
    console.log(yearsOld);