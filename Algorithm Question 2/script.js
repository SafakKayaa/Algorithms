// ! Write a function that takes a string as input and
//! returns the string reversed.

function reverseString(string) {
    const characters = string.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join()

    return reversedString;
}

const originalString = "Hello, React Developer!";
const reversedString = reverseString(originalString);
console.log(reversedString);
// Output: "!repoleveD tcareR ,olleH"



//? Another Question: Check for Palindrome

//! Write a function that takes a string as input 
//! and returns true if the string is a palindrome 
//! (reads the same backward as forward), and false otherwise.

function isPalindrome(str) {
    const characters = str.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join('');

    return str === reversedString;
}

const str1 = "radar";
const str2 = "hello";

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: false
