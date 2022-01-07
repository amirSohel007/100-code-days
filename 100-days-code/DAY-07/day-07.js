// Solution 01
const uniqueObject01 = (dataCollection) => {
  const finalObject = {};
  for (let i = 0; i < dataCollection.length; i++) {
    if (finalObject[dataCollection[i].age]) {
      finalObject[dataCollection[i].age] = ++finalObject[dataCollection[i].age];
    } else finalObject[dataCollection[i].age] = 1;
  }
  return finalObject;
};

console.log(
  uniqueObject03([
    { name: "abc", age: 20 },
    { name: "def", age: 30 },
    { name: "ghi", age: 20 },
    { name: "jkl", age: 20 },
  ])
);
