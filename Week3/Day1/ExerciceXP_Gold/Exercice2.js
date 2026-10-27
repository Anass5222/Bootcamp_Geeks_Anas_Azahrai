
function abbrevName(name) {
    let words = name.trim().split(" ");

    return words[0] + " " + words[1][0].toUpperCase() + ".";
}

// Test
console.log(abbrevName("Robin Singh")); 
console.log(abbrevName("Anas Azahrai")); 
