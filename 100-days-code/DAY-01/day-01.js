// solution 01
const reverseString01 = (value) => {
  return value.split("").reverse().join("");
};

// solution 02
const reverseString02 = () => {
  return [...value].reverse().join("");
};

// solution 03 (old way)
const reverseString03 = (personName) => {
  const reverseName = [];
  const personStringArray = personName.split("");
  for (let index = 0; index < personStringArray.length; index++) {
    reverseName.push(personStringArray[index]);
  }
  return reverseName.reverse().join("");
};
