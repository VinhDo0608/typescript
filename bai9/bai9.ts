type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  
  const productsList: Product[] = [
    { id: 1, name: 'Product A', price: 50, quantity: 2 },
    { id: 2, name: 'Product B', price: 120, quantity: 3 },
    { id: 3, name: 'Product C', price: 80, quantity: 5 },
    { id: 4, name: 'Product D', price: 90, quantity: 1 },
    { id: 5, name: 'Product E', price: 110, quantity: 4 },
  ];
  
  // Sử dụng reduce để tính tổng giá trị (price * quantity) của tất cả sản phẩm trong danh sách.
  const totalValue = productsList.reduce((acc, product) => acc + product.price * product.quantity, 0);
  
  console.log('Tổng giá trị của tất cả sản phẩm:', totalValue);
  
  // Sử dụng filter để lọc ra các sản phẩm có giá lớn hơn 100.
  const expensiveProducts = productsList.filter(product => product.price > 100);
  
  console.log('Sản phẩm có giá lớn hơn 100:', expensiveProducts);
  
  // Sử dụng map để tạo một mảng mới chứa các đoạn mô tả sử dụng template literals.
  const productDescriptions = productsList.map(product => `Sản phẩm ${product.name} có giá ${product.price} đồng và còn ${product.quantity} sản phẩm.`);
  
  console.log('Mô tả sản phẩm:', productDescriptions);
  
  // Sử dụng reduce để tính tổng số lượng của tất cả các sản phẩm có giá dưới 100.
  const totalQuantityUnder100 = productsList.reduce((acc, product) => {
    if (product.price < 100) {
      return acc + product.quantity;
    }
    return acc;
  }, 0);
  
  console.log('Tổng số lượng của các sản phẩm có giá dưới 100:', totalQuantityUnder100);
  
  // Tạo hàm getDiscountedProducts
  const getDiscountedProducts = (products: Product[], discountRate: number): Product[] => {
    return products.map(product => ({
      ...product,
      price: product.price * (1 - discountRate),
    }));
  };
  
  // Sử dụng hàm getDiscountedProducts để áp dụng giảm giá 10%
  const discountedProducts = getDiscountedProducts(productsList, 0.1);
  
  console.log('Danh sách sản phẩm sau khi giảm giá:', discountedProducts);
  