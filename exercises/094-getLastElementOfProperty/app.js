function getLastElementOfProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])) {
        return undefined
    }
    let last = obj[key].length - 1;
    return obj[key][last];
}

let obj = {
  key: [1, 2, 5]
};
let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5