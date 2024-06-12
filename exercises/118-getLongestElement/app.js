function getLongestElement(arr) {
    // your code here
    var newArray = [];
    if (arr.length == 0) {
        return "";
    } else {
        for (let i in arr) {
            newArray.push([arr[i].length, arr[i]]);
            newArray.sort();
        }
    }
    let last = newArray.pop();
    return last[1];
}

let output = getLongestElement(['one', 'sixteen', 'two', 'three']);
console.log(output); // --> 'three'
