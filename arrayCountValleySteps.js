// Count how many valleys on the path represented by a string (U (up) and D (down))

// const path = 'UDDDUDUU';
const path = 'DDUUDDUDUUUD'
// const steps = 8;
const steps = 12;

function CountValleys (steps, path) {

    const pathArr = path.split("");
    let count = 0;
    
    for ( let i=1; i <=steps; i++) {
        if(pathArr[i] === "D" && pathArr[i] === pathArr[i-1] && pathArr[i+1] === "U") {
            count ++
        }
    }
    return count
};

console.log(CountValleys(steps, path))