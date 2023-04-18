function detectXSS(input) {
  const pattern = /<script.*?>.*?<\/script>/gi;

  if (pattern.test(input)) {
    console.log("XSS detected!");
  } else {
    console.log("No XSS detected");
  }
}

const userInput = "<script>alert('XSS')</script>";
detectXSS(userInput); // XSS detected!
