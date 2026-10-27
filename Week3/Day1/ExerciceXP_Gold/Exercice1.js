
function isBlank(str) {
    return str.trim() === "";
}

// Test
console.log(isBlank(""));       
console.log(isBlank("abc"));    
console.log(isBlank("   "));    
console.log(isBlank("hello"));  
