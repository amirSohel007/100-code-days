// solution 1
const swipeObject01 = (obj) => {
  const objectEntriesArray = Object.entries(obj);
  // objectEntriesArray is now : [[key, value], [key, val], [key, val]]
  const reverseObject = [];
  for (let i = 0; i < objectEntriesArray.length; i++) {
    /*
     * reutring a new Array which contain 2 property key and value
     * key has index 0 and value has index 0 so, swipe the index like [[0,1]]
     */
    reverseObject.push([objectEntriesArray[i][1], objectEntriesArray[i][0]]);
  }
  return Object.fromEntries(reverseObject);
};

// solution 2
const swipeObject02 = (obj) => {
  const objectEntriesArray = Object.entries(obj).map(([key, val]) => [
    val,
    key,
  ]);
  const finialObject = Object.fromEntries(objectEntriesArray);
  return finialObject;
};
