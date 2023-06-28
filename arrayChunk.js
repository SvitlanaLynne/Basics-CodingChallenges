// Chunk array into subarrays of a certain length

const myArr = ["apple", "sunshine", "book", "mountain", "ocean", "laughter", "guitar", "adventure", "serendipity", "butterfly"];



function Chunk(arr, chunkSize) {
    let result = [];
    if (arr.length > chunkSize) {
        while (arr.length >= chunkSize) {
            let chunk = arr.slice(0, chunkSize);
            result.push(chunk);
            arr.splice(0, chunkSize);
            if (arr.length < chunkSize && arr.length !== 0) {
                console.log("The remainder:", arr);
            }
        }
        console.log(result)
    } else {
        console.log("chunk size exceeds the array's length")
    }
}

Chunk(myArr, 2);
