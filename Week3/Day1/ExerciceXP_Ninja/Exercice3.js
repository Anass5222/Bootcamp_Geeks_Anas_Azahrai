
function isPalindrome(str) {
    let word = str.toLowerCase();
    let reversed = word.split("").reverse().join("");

    if (word === reversed) {
        return "C'est un palindrome !";
    } else {
        return "Ce n'est pas un palindrome.";
    }
}


console.log("Madam :", isPalindrome("Madam"));
console.log("bob :", isPalindrome("bob"));
console.log("kayak :", isPalindrome("kayak"));
console.log("hello :", isPalindrome("hello"));
