function getLargestElementAtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    } else {
      let sorted = obj[key].sort(function(a,b) { return a-b; });
      return sorted[obj[key].length - 1];
    }
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
