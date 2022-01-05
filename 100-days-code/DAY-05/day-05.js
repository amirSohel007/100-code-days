// Solution 01

const checkTotalSum01 = (a, b) => {
  let is100;
  if (a === 100 || b === 100 || a + b === 100) {
    is100 = true;
  } else {
    is100 = false;
  }
};

const checkTotalSum02 = (a, b) =>
  a === 100 || b === 100 || a + b === 100 ? (is100 = true) : (is100 = false);

console.log(checkTotalSum02(10, 3));
console.log(checkTotalSum02(100, 30));
console.log(checkTotalSum02(10, 90));
console.log(checkTotalSum02(13, 3));
