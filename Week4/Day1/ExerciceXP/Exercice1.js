function compareToTen(num){

let promise= new Promise((resolve, reject) => {
    if (num > 10) {
        resolve("greater than ten");
    } else {
        reject("not greater than ten");
    }
});
return promise;
}

compareToTen(15)
.then((result) => console.log(result)) // Output: greater than ten
.catch((error) => console.log(error));

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))