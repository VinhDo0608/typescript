function sumOfArray(a: number[]): number{
    let sum = 0;
    for (let x of a) {
        sum += x;
    }
    return sum;
}

const arr: number[] = [1,2,4,5,3];
const sum = sumOfArray(arr);
console.log("result = " + sum);