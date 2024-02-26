function sumOfArray(a) {
    var sum = 0;
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var x = a_1[_i];
        sum += x;
    }
    return sum;
}
var arr = [1, 2, 4, 5, 3];
var sum = sumOfArray(arr);
console.log("result = " + sum);
