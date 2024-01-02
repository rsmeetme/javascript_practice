const fullNumber = '20343990021255';
const last4Digits = fullNumber.slice(-4);
     console.log(fullNumber.length);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"