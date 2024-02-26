import fetch, { Response } from 'node-fetch';

async function fetchDataFromAPI(): Promise<any> {
  try {
    // Thực hiện yêu cầu GET đến API sử dụng node-fetch
    const response: Response = await fetch('http://localhost:3000/users');

    // Kiểm tra nếu phản hồi không thành công (không phải 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Chuyển đổi phản hồi sang dạng JSON
    const data: any = await response.json();

    // Trả về dữ liệu nếu mọi thứ diễn ra suôn sẻ
    return data;
  } catch (error) {
    // Trả về lỗi nếu có lỗi xảy ra
    throw error;
  }
}

// Sử dụng async/await
async function fetchDataAndLog() {
  try {
    const data = await fetchDataFromAPI();
    console.log('Dữ liệu từ API:', data);
  } catch (error) {
    console.error('Lỗi khi gọi API:', error);
  }
}

// Gọi hàm fetchDataAndLog
fetchDataAndLog();
