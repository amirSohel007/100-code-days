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
