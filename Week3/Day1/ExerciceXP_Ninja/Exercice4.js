
function biggestNumberInArray(arrayNumber) {
    
    const numbers = arrayNumber.filter(item => typeof item === "number");

    
    if (numbers.length === 0) {
        return 0;
    }

    
    let biggest = numbers[0];


    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }

    return biggest;
}


const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ["a", 3, 4, 2];
const array3 = [];

console.log(biggestNumberInArray(array));  
console.log(biggestNumberInArray(array2)); 
console.log(biggestNumberInArray(array3)); 
