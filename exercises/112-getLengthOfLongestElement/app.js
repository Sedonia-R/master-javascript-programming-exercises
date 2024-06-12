function getLengthOfLongestElement(arr) {
    var newArray = [];
    if (arr.length == 0) {
        return 0;
    } else {
        for (let i in arr) {
            newArray.push(arr[i].length);
        }
    }
    newArray.sort();
    return newArray.pop();
}

let output = getLengthOfLongestElement(['one', 'sixtye', 'two', 'three']);
console.log(output); // --> 5
