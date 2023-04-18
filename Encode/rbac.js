// Xác định các vai trò và quyền truy cập tương ứng
const roles = {
  admin: ["create", "read", "update", "delete"],
  editor: ["create", "read", "update"],
  viewer: ["read"],
};

// Xác định người dùng và vai trò của họ
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "editor" },
  { name: "Charlie", role: "viewer" },
];

// Hàm kiểm tra quyền truy cập
function hasAccess(user, permission) {
  // Lấy vai trò của người dùng
  const userRole = roles[user.role];

  // Nếu người dùng có quyền truy cập
  if (userRole && userRole.includes(permission)) {
    return true;
  }

  return false;
}

// Sử dụng hàm kiểm tra quyền truy cập
const user1 = users[0];
console.log(hasAccess(user1, "read")); // true
console.log(hasAccess(user1, "create")); // true
console.log(hasAccess(user1, "delete")); // true
console.log(hasAccess(user1, "update")); // true

const user2 = users[1];
console.log(hasAccess(user2, "read")); // true
console.log(hasAccess(user2, "create")); // true
console.log(hasAccess(user2, "delete")); // false
console.log(hasAccess(user2, "update")); // true

const user3 = users[2];
console.log(hasAccess(user3, "read")); // true
console.log(hasAccess(user3, "create")); // false
console.log(hasAccess(user3, "delete")); // false
console.log(hasAccess(user3, "update")); // false
