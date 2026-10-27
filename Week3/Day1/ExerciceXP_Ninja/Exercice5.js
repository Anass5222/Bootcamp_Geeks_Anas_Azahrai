
function uniqueElements(array) {
    let newList = [];

    for (let i = 0; i < array.length; i++) {
        if (!newList.includes(array[i])) {
            newList.push(array[i]);
        }
    }

    return newList;
}


const list = [1, 2, 3, 3, 3, 3, 4, 5];

const newList = uniqueElements(list);

console.log(newList); 
