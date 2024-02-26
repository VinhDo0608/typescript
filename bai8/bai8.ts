import { calculateFactorial, isPrimeNumber } from './utils';

const factorialResult = calculateFactorial(5);
console.log(`Factorial of 5: ${factorialResult}`);

const numberToCheck = 13;
if (isPrimeNumber(numberToCheck)) {
    console.log(`${numberToCheck} is a prime number.`);
} else {
    console.log(`${numberToCheck} is not a prime number.`);
}
