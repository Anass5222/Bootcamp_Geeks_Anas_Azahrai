
function swapCase(str) {
    let result = "";

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

// Test
console.log(swapCase("The Quick Brown Fox"));
