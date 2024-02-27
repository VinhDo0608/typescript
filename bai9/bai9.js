var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var productsList = [
    { id: 1, name: 'Product A', price: 50, quantity: 2 },
    { id: 2, name: 'Product B', price: 120, quantity: 3 },
    { id: 3, name: 'Product C', price: 80, quantity: 5 },
    { id: 4, name: 'Product D', price: 90, quantity: 1 },
    { id: 5, name: 'Product E', price: 110, quantity: 4 },
];
// Sử dụng reduce để tính tổng giá trị (price * quantity) của tất cả sản phẩm trong danh sách.
var totalValue = productsList.reduce(function (acc, product) { return acc + product.price * product.quantity; }, 0);
console.log('Tổng giá trị của tất cả sản phẩm:', totalValue);
// Sử dụng filter để lọc ra các sản phẩm có giá lớn hơn 100.
var expensiveProducts = productsList.filter(function (product) { return product.price > 100; });
console.log('Sản phẩm có giá lớn hơn 100:', expensiveProducts);
// Sử dụng map để tạo một mảng mới chứa các đoạn mô tả sử dụng template literals.
var productDescriptions = productsList.map(function (product) { return "S\u1EA3n ph\u1EA9m ".concat(product.name, " c\u00F3 gi\u00E1 ").concat(product.price, " \u0111\u1ED3ng v\u00E0 c\u00F2n ").concat(product.quantity, " s\u1EA3n ph\u1EA9m."); });
console.log('Mô tả sản phẩm:', productDescriptions);
// Sử dụng reduce để tính tổng số lượng của tất cả các sản phẩm có giá dưới 100.
var totalQuantityUnder100 = productsList.reduce(function (acc, product) {
    if (product.price < 100) {
        return acc + product.quantity;
    }
    return acc;
}, 0);
console.log('Tổng số lượng của các sản phẩm có giá dưới 100:', totalQuantityUnder100);
// Tạo hàm getDiscountedProducts
var getDiscountedProducts = function (products, discountRate) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * (1 - discountRate) })); });
};
// Sử dụng hàm getDiscountedProducts để áp dụng giảm giá 10%
var discountedProducts = getDiscountedProducts(productsList, 0.1);
console.log('Danh sách sản phẩm sau khi giảm giá:', discountedProducts);
