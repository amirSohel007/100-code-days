const keys = ["name", "city", "color", "phone"];
const values = ["john", "canada", "pink", "734834"];

// soluton 01
const createObject01 = (keys, values) => {
  const finialObject = {};
  for (let key = 0; key < keys.length; key++) {
    for (let value = 0; value < values.length; value++) {
      finialObject[keys[key]] = values[key];
    }
  }
  return finialObject;
};

console.log(createObject01(keys, values));
