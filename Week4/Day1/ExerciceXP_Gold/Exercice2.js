// 1. Create a function that returns a Promise
function timesTwoAsync(x) {

    // Create a Promise and resolve it with x multiplied by 2
    return new Promise(resolve => resolve(x * 2));

}

// 2. Create an array containing 3 numbers
const arr = [1, 2, 3];

// 3. Use map() to apply timesTwoAsync to each element
// map() calls the function for each number and creates an array of Promises
const promiseArr = arr.map(timesTwoAsync);



// 4. Promise.all() accepts an array of Promises
// It waits until all Promises are resolved
// Then it returns an array containing all resolved values
// The results keep the original order of the array

Promise.all(promiseArr)

    // 5. then() executes when all Promises are successfully resolved
    // result receives the array of resolved values
    .then(result => {

        // Display the final result in the console
        console.log(result);

    });

// OUTPUT:
// [2, 4, 6]

// EXPLANATION:
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// map() creates 3 Promises.
// Promise.all() collects their resolved values.
// The final output is [2, 4, 6].