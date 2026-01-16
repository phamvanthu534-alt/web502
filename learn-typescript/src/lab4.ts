type Student = {
    id: number;
    name: string;
    score: number;
  };
  
  // Ví dụ sử dụng
  const student1: Student = {
    id: 1,
    name: "Nguyễn Văn A",
    score: 8.5,
  };
  

  ////

  interface User {
    id: number;
    email: string;
    phone?: string;
  }
  
  // Ví dụ
  const user1: User = {
    id: 1,
    email: "test@gmail.com",
  };
  
  const user2: User = {
    id: 2,
    email: "abc@gmail.com",
    phone: "0123456789",
  };

  
  ////

  type Calculate = (a: number, b: number) => number;

const add: Calculate = (a, b) => {
  return a + b;
};

const multiply: Calculate = (a, b) => {
  return a * b;
};

// Ví dụ
console.log(add(5, 3));       // 8
console.log(multiply(5, 3)); // 15


///


type ApiStatus = "idle" | "loading" | "success" | "error";

function logStatus(status: ApiStatus): void {
  switch (status) {
    case "loading":
      console.log("Đang tải...");
      break;
    case "success":
      console.log("Thành công");
      break;
    case "error":
      console.log("Có lỗi xảy ra");
      break;
    default:
      console.log("Chưa thực hiện");
  }
}

// Ví dụ
logStatus("loading");
logStatus("success");
logStatus("error");
