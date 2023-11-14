// Count elements' appearance at respective indexes

const arr = [1,1,3,2,1]

function countFrequency(arr) {
    let result = [];
    let indexesArr = [];

    for (i = 0; i < 100; i++) {
     indexesArr[i] = i;
    }

    for (let elem of indexesArr) {
        if (arr.includes(elem)) {

            let count = arr.filter((x) => x === elem).length;
            result.push(count)

        } else {
            result.push(0);
        }
    }

return result

};

console.log(countFrequency(arr))