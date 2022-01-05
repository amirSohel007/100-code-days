// Solution 01
const uniqueValueArray01 = (arr) => {
  let newArr = [];
  arr.forEach((item) => {
    if (newArr.indexOf(item) < 0) {
      newArr.push(item);
    }
  });
  return newArr;
};

// Solution 02
const uniqueValueArray02 = (arr) => {
  let newArr = [];
  for (let i of arr) newArr.indexOf(i) < 0 ? newArr.push(i) : "";
  return newArr;
};

// Solution 03
const uniqueValueArray03 = (arr) => ([...new Set(arr)]);

// Solution 04
const uniqueValueArray04 = (arr) =>
  arr.reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);

console.log(uniqueValueArray04([1, 2, 2, 2, 1, 1]));
