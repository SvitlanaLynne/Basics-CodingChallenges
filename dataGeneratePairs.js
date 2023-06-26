// Pair employees from a file into groups of 2

const fs = require ("fs");


let employees;

try {
    employees = fs.readFileSync('dataGeneratePairs_Employees.csv', 'utf-8');
}
catch (error) {
    process.stdout.write(error+"\n");
};



const employeesArr = employees.split("\r\n");


function generatePairs(arr) {
    const groups = [];
    let person;
  
    while (arr.length >= 2) {
      let rand = Math.floor(Math.random() * arr.length);
  
      let person1 = arr[0];
      let person2 = arr[rand];
  
      groups.push([person1, person2]);
  
      arr.splice(rand, 1);
      arr.splice(0, 1);
    }
  
    for(elem of groups){
        if (elem.includes('')) {
            person = elem[0];
            process.stdout.write(
              "There is one person without a pair in the list: " + person + "\n"    // if the list id odd
            );
          };
    }
    
    return groups;
  }
  
  generatePairs(employeesArr);









