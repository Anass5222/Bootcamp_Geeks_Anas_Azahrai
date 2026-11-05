// 1. Create a resolved Promise with the value 3
let promise1 = Promise.resolve(3);

promise1.then((result) => {
    console.log(result);
});


// 2. Create a rejected Promise with the error "Boo!"

let promise2 = Promise.reject("Boo!");

promise2.catch((error) => {
    console.log(error);
});