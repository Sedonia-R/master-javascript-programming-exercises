function getLargestNumberAmongMixedElements(arr) {
    // your code here
    newArr = arr.filter((x) => typeof x == 'number');
    if (arr.length == 0 || newArr.length == 0) {
        return 0;
    } else {
        newArr.sort();
        return newArr.pop();
    }
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
