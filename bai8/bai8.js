"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var factorialResult = (0, utils_1.calculateFactorial)(5);
console.log("Factorial of 5: ".concat(factorialResult));
var numberToCheck = 13;
if ((0, utils_1.isPrimeNumber)(numberToCheck)) {
    console.log("".concat(numberToCheck, " is a prime number."));
}
else {
    console.log("".concat(numberToCheck, " is not a prime number."));
}
