function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allStrings = words.every((word) => typeof word === "string");

    if (allStrings) {
      resolve(words.map((word) => word.toUpperCase()));
    } else {
      reject("Error: all items in the array must be strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve([...words].sort());
    } else {
      reject("Error: the array must contain more than 4 words.");
    }
  });
}

//in this example, the catch method is executed, because the array contains a number
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed, because the array length is not bigger than 4
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
