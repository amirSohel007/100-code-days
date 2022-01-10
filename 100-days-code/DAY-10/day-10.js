// soluton 01
const convertBinary01 = (numbers) => {
  const binaryArray = [];
  for (let digit of numbers) binaryArray.push(digit.toString(2));
  return binaryArray;
};

// soluton 02
const convertBinary02 = (numbers) => numbers.map((digit) => digit.toString(2));

const digits = [23, 34, 53, 22, 54, 64, 63, 25, 43];
console.log(convertBinary01(digits));
