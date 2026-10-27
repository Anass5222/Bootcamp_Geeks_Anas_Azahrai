
function isOmnipresent(arr, value) {
    for (let subArray of arr) {
        if (!subArray.includes(value)) {
            return false;
        }
    }

    return true;
}

// Test
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3]], 3));
