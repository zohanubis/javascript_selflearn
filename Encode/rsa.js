const NodeRSA = require("node-rsa");

// Tạo cặp khóa
const key = new NodeRSA({ b: 512 }); // độ dài khóa 512 bit
console.log("Public key:", key.exportKey("public"));
console.log("Private key:", key.exportKey("private"));

// Mã hóa và giải mã với khóa công khai và khóa bí mật
const message = "Hello, world!";
const encrypted = key.encrypt(message, "base64");
const decrypted = key.decrypt(encrypted, "utf8");
console.log("Encrypted message:", encrypted);
console.log("Decrypted message:", decrypted);
