function getElementsGreaterThan10AtProperty(obj, key) {
    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    } else {
        let greaterThanTen = obj[key].filter (element => element > 10);
        return greaterThanTen;
    }
}
let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]