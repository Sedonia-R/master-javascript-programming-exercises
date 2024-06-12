function getSmallestElementAtProperty(obj, key) {
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return [];
  } else {
    let sorted = obj[key].sort();
    return sorted[0];
  }
}


let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
