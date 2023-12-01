// ! Write a function that takes a string as input and
//! returns the string reversed.

const originalString = "Hello, React Developer!";
const reversedString = reverseString(originalString);
console.log(reversedString);
// Output: "!repoleveD tcareR ,olleH"


function reverseString(string) {
    const characters = string.split('');
    const reversedCharacters = characters.reverse();
    const reversedString = reversedCharacters.join()

    return reversedString;
}
