var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.area = function () { return this.length * this.width; };
    return Rectangle;
}());
var reg = new Rectangle(20, 35);
console.log(reg.area());
