// Solution 01
const compairObject = (objA, objB) => {
  let isMatch;
  const objectOne = JSON.stringify(objA);
  const objectTwo = JSON.stringify(objB);
  if (objectOne === objectTwo) return (isMatch = true);
  else return (isMatch = false);
};

// two Object which we are comparing
const obj01 = {
  name: "test",
  age: 30,
  skills: ["code", "writing", "music"],
};

const obj02 = {
  name: "test",
  age: 30,
  skills: ["code", "writing", "music"],
};

// Output will be in boolean true or false
console.log(compairObject(obj01, obj02));
