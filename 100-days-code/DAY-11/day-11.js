// soluton 01
const stringToBinary01 = (string) => {
  let binaryCode = [];
  for (let index = 0; index < string.length; index++) {
    binaryCode.push(string[index].charCodeAt().toString(2));
  }
  return binaryCode.join(" ");
};

console.log(stringToBinary01("Hello World"));
