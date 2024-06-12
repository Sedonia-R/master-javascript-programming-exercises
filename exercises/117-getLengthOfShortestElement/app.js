function getLengthOfShortestElement(arr) {
    // your code here
    var newArray = [];
    if (arr.length == 0) {
        return 0;
    } else {
        for (let i in arr) {
            newArray.push(arr[i].length);
        }
    }
    newArray.sort();
    return newArray.shift();
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
