// ! Write a function that takes an array of numbers
// ! as input and returns the maximum number in the array.

const numbers = [3, 8, 1, 6, 2, 8, 4, 32, 30];

function findMax(arr) {
    if (arr.length == 0) {
        return undefined;
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}


const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 32
