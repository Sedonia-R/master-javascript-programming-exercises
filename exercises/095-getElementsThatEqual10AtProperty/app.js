// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key]) {
        return [];
    } else if (!Array.isArray(obj[key]))
        return [];
    else {
        let equalsTen = obj[key].filter(element => element == 10);
        return equalsTen;
    }
}

let obj = {
  key: [1000, 10, 50, 10]
};
let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]