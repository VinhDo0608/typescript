function arrGen<T>(arr:T[]): T{
    return arr[0];
}

const arr1 = ["a", "b", "v"];
console.log(arrGen(arr1))