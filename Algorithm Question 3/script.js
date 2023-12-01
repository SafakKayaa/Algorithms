//! Write a function that takes a string as input 
//! and returns the count of vowels (i.e., 
//! the letters 'a', 'e', 'i', 'o', 'u') in the string.


function countVowels(string) {
    const vowels = "aeiuoAEIUO";
    let sum = 0;

    for (let letter of string) {
        if (vowels.includes(letter)) {
            sum++;
        }
    }

    return sum;
}

// Example usage:
const exampleString = "Hello, React Developer!";
const vowelCount = countVowels(exampleString);
console.log(vowelCount); // Output: 8


// ! Alternative: 


// function countVowels(string) {
//     const matchedVowels = string.match(/[aeiuoAEIUO]/g);
//     return matchedVowels ? matchedVowels.length : null
// }




