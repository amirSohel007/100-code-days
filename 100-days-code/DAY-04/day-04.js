// Solution 01
const addNewString01 = (str) => {
  let newString;
  // Checking !New already there or not
  if (str.includes("!New")) {
    return (newString = str);
  } else {
    newString = `!New ${str}`;
  }
  return newString;
};
// Solution 02
const addNewString02 = (str) => (str.indexOf("!New") < 0 ? `!New ${str}` : str);

// Solution 03
const addNewString03 = (str) => (str.includes("!New") ? str : `!New ${str}`);

console.log(addNewString01("Offers"));
console.log(addNewString01("!New collections"));
