function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
    return 0;
  } else {
    let start = 0;
    let sum = obj[key].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      start,);
    return (sum / obj[key].length);
  }
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  