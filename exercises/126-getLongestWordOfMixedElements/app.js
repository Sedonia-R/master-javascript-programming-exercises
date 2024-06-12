function getLongestWordOfMixedElements(arr) {
    // your code here
    var newArr = arr.filter((x) => typeof x == 'string');
    if (arr.length == 0 || newArr.length == 0) {
        return "";
    } else {
        newArr.sort((a, b) => a.length - b.length);
    }
    return newArr.pop();
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
