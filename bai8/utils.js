"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrimeNumber = exports.calculateFactorial = void 0;
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}
exports.calculateFactorial = calculateFactorial;
function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
exports.isPrimeNumber = isPrimeNumber;
