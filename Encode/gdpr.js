// Thu thập dữ liệu từ người dùng
function collectData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Lưu trữ dữ liệu vào cookie
  document.cookie = `name=${name}; expires=Sat, 01 Jan 2022 00:00:00 UTC`;
  document.cookie = `email=${email}; expires=Sat, 01 Jan 2022 00:00:00 UTC`;
}

// Xóa dữ liệu khỏi cookie
function deleteData() {
  document.cookie = "name=; expires=Thu, 01 Jan 2023 00:00:00 UTC";
  document.cookie = "email=; expires=Thu, 01 Jan 2023 00:00:00 UTC";
}

// Yêu cầu sự đông ý của người dùng

// Hiển thị cửa sổ thông báo yêu cầu sự đồng ý
function askForConsent() {
  if (confirm("We need your consent to process your data. Do you agree?")) {
    // Người dùng đã đồng ý
    document.cookie = "consent=true; expires=Sat, 01 Jan 2022 00:00:00 UTC";
  } else {
    // Người dùng không đồng ý
    document.cookie = "consent=false; expires=Sat, 01 Jan 2022 00:00:00 UTC";
  }
}

// Kiểm tra xem người dùng đã đồng ý chưa
function hasConsent() {
  const consentCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("consent"));
  if (consentCookie) {
    return consentCookie.split("=")[1] === "true";
  }
  return false;
}
