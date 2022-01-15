// soluton 01
const stringToBinary01 = (string) => {
  let binaryCode = [];
  for (let index = 0; index < string.length; index++) {
    binaryCode.push(string[index].charCodeAt().toString(2));
  }
  return binaryCode.join(" ");
};

// soluton 02
const stringToBinary02 = (string) =>
  [...string].map((chat) => chat.charCodeAt().toString(2)).join(" ");

console.log(stringToBinary01("Hello World"));
