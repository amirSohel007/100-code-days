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

// Solution 02
const uniqueObject02 = (dataCollection) => {
  const finalObject = {};
  for (let i of dataCollection) {
    if (finalObject[i.age]) finalObject[i.age] = ++finalObject[i.age];
    else finalObject[i.age] = 1;
  }
  return finalObject;
};

// Solution 03
const uniqueObject03 = (dataCollection) => {
  const finalObject = dataCollection.reduce(function (acc, curr) {
    acc[curr.age] ? (acc[curr.age] = ++acc[curr.age]) : (acc[curr.age] = 1);
    return acc;
  }, {});
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
