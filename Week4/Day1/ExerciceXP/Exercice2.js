let promise = new Promise(function(resolve, reject) {

    setTimeout(() => {
        resolve("success");
    }, 4000);

});

promise.then((result) => {
    console.log(result);
});