const CryptoJS = require("crypto-js");

// Mã hóa và giải mã thông điệp
const message = "Hello, world!";
const key = "MySecretKey123"; // khóa bí mật
const encrypted = CryptoJS.AES.encrypt(message, key).toString();
const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(
  CryptoJS.enc.Utf8
);
console.log("Encrypted message:", encrypted);
console.log("Decrypted message:", decrypted);
