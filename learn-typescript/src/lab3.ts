// 1. Hàm tính điểm trung bình
// Return type + Arrow Function
const tinhDiemTrungBinh = (a: number, b: number, c: number): number => {
    return (a + b + c) / 3;
  };
  
  console.log("Điểm trung bình:", tinhDiemTrungBinh(8, 7, 9));
  
  
  // 2. Định nghĩa kiểu hàm kiểm tra số chẵn lẻ
  // Function as Type
  type KiemTraChanLe = (n: number) => boolean;
  
  const isEven: KiemTraChanLe = (n) => {
    return n % 2 === 0;
  };
  
  console.log("Số 10 là số chẵn:", isEven(10));
  console.log("Số 7 là số chẵn:", isEven(7));
  
  
  // 3. Hàm tạo thông tin người dùng
  // Default + Optional Parameter
  const taoThongTinNguoiDung = (
    ten: string,
    tuoi?: number,
    quocGia: string = "Việt Nam"
  ): string => {
    return `Tên: ${ten}, Tuổi: ${tuoi ?? "Không rõ"}, Quốc gia: ${quocGia}`;
  };
  
  console.log(taoThongTinNguoiDung("Vinh", 19));
  console.log(taoThongTinNguoiDung("An"));
  
  
  // 4. Hàm xử lý danh sách sản phẩm
  // Spread + Rest
  type Product = {
    name: string;
    price: number;
  };
  
  const xuLyDanhSachSanPham = (
    danhSachCu: Product[],
    ...sanPhamMoi: Product[]
  ): Product[] => {
    return [...danhSachCu, ...sanPhamMoi];
  };
  
  const products: Product[] = [
    { name: "Áo", price: 200 },
    { name: "Quần", price: 300 }
  ];
  
  const newProducts = xuLyDanhSachSanPham(
    products,
    { name: "Giày", price: 500 },
    { name: "Mũ", price: 150 }
  );
  
  console.log("Danh sách sản phẩm:", newProducts);
  