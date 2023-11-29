// Write a function that calculates 
// the sum of all even Fibonacci numbers up to a given limit.
// The Fibonacci sequence is defined as follows:
// the first two numbers are 1 and 2, and each subsequent number
// is the sum of the two preceding ones.
// The sequence starts: 1, 2, 3, 5, 8, 13, 21, ...

//  For example, if the limit is 10, 
// the even Fibonacci numbers up to 10 are 2 and 8, 
// and their sum is 10.



function sumEvenFibonacci(limit) {
    let sum = 0;
    let prev = 1;
    let current = 2;

    while (current <= limit) {
        if (current % 2 === 0) {
            sum += current;
        }

        const next = prev + current;
        prev = current;
        current = next;
    }

    return sum;
}

// Examples:
const result = sumEvenFibonacci(10);
console.log(result); // Output: 10

const result2 = sumEvenFibonacci(40);
console.log(result2); // Output: 44