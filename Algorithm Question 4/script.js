//! Question: Find the Sum of an Array

//! Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.


function findSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}


const numbers = [1, 2, 3, 4, 5];
const sum = findSum(numbers);
console.log(sum); // Output: 15

const numbers2 = [10, 20, 30, 35];
const sum2 = findSum(numbers2);
console.log(sum2); // Output: 95
