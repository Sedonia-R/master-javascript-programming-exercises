function getEvenElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    } else {
      let evenNums = obj[key].filter (element => element % 2 == 0);
      return evenNums;
    }
}


let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
