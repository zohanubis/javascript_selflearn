// Lấy thông tin form đăng nhập
const loginForm = document.getElementById("login-form");

// Bắt đầu xử lý khi người dùng nhấn nút "Login"
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Ngăn chặn submit form mặc định

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Kiểm tra tên đăng nhập và mật khẩu
  if (username === "admin" && password === "password") {
    // Nếu đăng nhập đúng, chuyển hướng sang trang quản trị
    window.location.href = "/admin";
  } else {
    // Nếu đăng nhập sai, hiển thị thông báo lỗi
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
  }
});
