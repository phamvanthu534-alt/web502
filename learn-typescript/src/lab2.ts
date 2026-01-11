// Tạo type Product có các trường sau:


enum Rate {
    low = "Thấp",
    medium = "Trung bình",
    hight = "Cao",
  }
  
  type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
    description?: string;
  };
  

// name: string
// price: number
// sale: boolean
// rate: enum {low : 'Thấp', medium: 'Trung bình', hight : 'Cao'}

// Tạo mảng listProducts có các phần tử có kiểu Product

let listProducts: Product[] = [
    { name: "Áo thun", price: 4, sale: true, rate: Rate.low },
    { name: "Quần jean", price: 8, sale: false, rate: Rate.medium },
    { name: "Giày thể thao", price: 12, sale: true, rate: Rate.hight },
    { name: "Mũ lưỡi trai", price: 3, sale: true, rate: Rate.low },
    { name: "Balo", price: 7, sale: false, rate: Rate.medium },
  ];
  

// Nhập ít nhất 5 phần tử
// Viết hàm thêm mới 1 phần tử vào mảng listProducts có key = description, có giá trị = 'Tốt' nếu price > 5, 'Bình thường' nếu price <=5 (sử dụng map)
function addDescription(products: Product[]): Product[] {
    return products.map((item) => ({
      ...item,
      description: item.price > 5 ? "Tốt" : "Bình thường",
    }));
  }
  
  listProducts = addDescription(listProducts);
  
// Viết hàm hiển thị danh sách sản phẩm: (Tên sản phẩm, giá bán, trạng thái sale,Đánh giá) (Sử dụng forEach)
function showProducts(products: Product[]): void {
    products.forEach((item) => {
      console.log(
        `Tên: ${item.name} | Giá: ${item.price} | Sale: ${item.sale ? "Có" : "Không"} | Đánh giá: ${item.rate}`
      );
    });
  }
  
  showProducts(listProducts);
  
// Viết hàm tính tổng giá bán sản phẩm (sử dụng reduce)
function totalPrice(products: Product[]): number {
    return products.reduce((sum, item) => sum + item.price, 0);
  }
  
  console.log("Tổng giá bán:", totalPrice(listProducts));
  
// Viết hàm lọc những sản phẩm đang Sale và đánh giá từ Trung bình trở lên (Sử dụng filter)
function filterSaleProducts(products: Product[]): Product[] {
    return products.filter(
      (item) =>
        item.sale === true &&
        (item.rate === Rate.medium || item.rate === Rate.hight)
    );
  }
  
  console.log("Sản phẩm sale & đánh giá từ Trung bình trở lên:");
  console.log(filterSaleProducts(listProducts));
  