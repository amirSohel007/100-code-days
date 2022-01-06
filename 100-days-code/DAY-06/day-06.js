// Solution 01
const findLargetNumber01 = (arr) => {
  let largetValue = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largetValue) largetValue = arr[index];
  }
  arr[arr.indexOf(largetValue)] = largetValue + 100;
  return arr;
};

// Solution 02
const findLargetNumber02 = (arr) => {
  let largetValue = 0;
  for (let i in arr) arr[i] > largetValue ? (largetValue = arr[i]) : "";
  arr[arr.indexOf(largetValue)] = largetValue + 100;
  return arr;
};

// Solution 03
const findLargetNumber03 = (arr) => {
  const largetValue = arr.reduce(
    (acc, curr) => (curr > acc ? (acc = curr) : acc),
    0
  );
  arr[arr.indexOf(largetValue)] = largetValue + 100;
  return arr;
};

// Solution 04
const findLargetNumber04 = (arr) => {
  const largetValue = Math.max(...arr);
  // now find the index of larget value
  const largetValueIndex = arr.indexOf(largetValue);
  // update the value on same index
  arr[largetValueIndex] = largetValue + 100;
  return arr;
};

console.log(
  findLargetNumber01([32, 432, 2, 42, 56, 7, 75, 4, 6, 321, 2, 14, 231, 12])
);
