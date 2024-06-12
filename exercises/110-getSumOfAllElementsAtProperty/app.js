function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
        return 0;
    } else {
        var start = 0;
        var sum = obj[key].reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          start,
        );
    }
    return sum;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
